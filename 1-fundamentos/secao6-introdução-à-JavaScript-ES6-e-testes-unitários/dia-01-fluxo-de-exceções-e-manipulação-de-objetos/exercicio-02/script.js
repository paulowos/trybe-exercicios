const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const motoboy = order['order']['delivery']['deliveryPerson'];
    const name = order['name'];
    const phoneNumber = order['phoneNumber'];
    const street = order['address']['street'];
    const streetNumber = order['address']['number'];
    const apartment = order['address']['apartment'];
    const address = `R. ${street}, Nº: ${streetNumber}, AP: ${apartment}`;
    const message = `Olá ${motoboy}, entrega para: ${name}, Telefone: ${phoneNumber}, ${address}`;
    console.log(message);
};
customerInfo(order);

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const newName = order['name'] = 'Luiz Silva';
    let pizzas = Object.keys(order.order.pizza);
    pizzas = pizzas.join(', ');
    const drinks = order['order']['drinks']['coke'];
    const newTotal = order['payment']['total'] = "50.00";
    const message = `Olá ${newName}, o total do seu pedido de ${pizzas} e ${drinks['type']} é R$ ${newTotal}`;
    console.log(message);

};

orderModifier(order);