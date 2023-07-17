const chai = require('chai');
const chaiHTTP = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const app = require('../../src/app');

chai.use(chaiHTTP);

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli'
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});



const { expect } = chai;

describe('Testando a API Cacau Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
    sinon.stub(fs.promises, 'writeFile')
      .resolves();
  });

  afterEach(function () {
    sinon.restore();
  });



  describe('Usando o método GET em /chocolates', function () {
    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];

    it('Retorna a lista completa de chocolates', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai.request(app).get('/chocolates/4');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(
        { id: 4, name: 'Mounds', brandId: 3 }
      );
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai.request(app).get('/chocolates/99');
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' });
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai.request(app).get('/chocolates/brand/1');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        { id: 1, name: 'Mint Intense', brandId: 1, },
        { id: 2, name: 'White Coconut', brandId: 1, },
      ]);
    });
  });

  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna o numero total de chocolates cadastrados', async function () {
      const response = await chai.request(app).get('/chocolates/total');
      expect(response.status).to.be.equal(200);
      expect(response.body.totalChocolates).to.be.equal(4);
    });
  });

  describe('Usando o método GET em /chocolates/search?name=ZZZ', function () {
    it('Retorna um array vazio com código 404', async function () {
      const response = await chai.request(app).get('/chocolates/search?name=ZZZ');
      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.instanceOf(Array);
      expect(response.body).to.have.length(0);
    });
  });

  describe('Usando o método GET em /chocolates/search?name=mo', function () {
    const output = [
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];

    it('Retorna um array com os chocolates Mound e Mon Chéri', async function () {
      const response = await chai.request(app).get('/chocolates/search?name=mo');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.instanceOf(Array);
      expect(response.body).to.deep.equal(output);
    });
  });

  describe('Usando o método PUT em /chocolates/1', function () {
    it('Retorna um objeto do chocolate atualizado', async function () {
      const id = 1;
      const requestBody = { name: 'Mint Pretty Good', brandId: 2 };
      const response = await chai.request(app)
        .put(`/chocolates/${id}`)
        .send(requestBody);

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ chocolate: { id, ...requestBody } });
    });
  });

  describe('Usando o método PUT em /chocolates/555', function () {
    it('Retorna um erro de id não encontrada', async function () {
      const id = 555;
      const requestBody = { name: 'Mint Pretty Good', brandId: 2 };
      const response = await chai.request(app)
        .put(`/chocolates/${id}`)
        .send(requestBody);

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'chocolate not found' });
    });
  });
});