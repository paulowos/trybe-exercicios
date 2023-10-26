class Ventilador:
    def __init__(self, cor, velocidade_maxima, potencia, price) -> None:
        self.cor = cor
        self.velocidade_maxima = velocidade_maxima
        self.potencia = potencia
        self.price = price


class Pessoa:
    def __init__(self, nome, dinheiro) -> None:
        self.nome = nome
        self.dinheiro = dinheiro

    def comprar_ventilador(self, ventilador):
        if ventilador.price <= self.dinheiro:
            self.dinheiro = self.dinheiro - ventilador.price
            self.ventilador = ventilador

    def __str__(self) -> str:
        if not hasattr(self, "ventilador"):
            return f"Possui ventilador: False"
        else:
            return f"Possui ventilador: True"


ventilador = Ventilador("Rosa", 3, 1000, 250)
pessoa = Pessoa("Paulo", 2000)

pessoa.comprar_ventilador(ventilador)

print(pessoa)
