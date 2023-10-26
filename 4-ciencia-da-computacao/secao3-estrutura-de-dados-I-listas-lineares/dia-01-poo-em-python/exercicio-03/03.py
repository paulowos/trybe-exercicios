from abc import ABC, abstractmethod
from typing import Union


class FiguraGeometrica(ABC):
    @abstractmethod
    def area() -> Union[int, float]:
        ...

    @abstractmethod
    def perimetro() -> Union[int, float]:
        ...


class Quadrado(FiguraGeometrica):
    def __init__(self, lado) -> None:
        super().__init__()
        self.lado = lado

    def area(self) -> int | float:
        return self.lado * self.lado

    def perimetro(self) -> int | float:
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base: int, altura: int) -> None:
        self.base = base

        self.altura = altura

    def area(self) -> Union[int, float]:
        return self.base * self.altura

    def perimetro(self) -> Union[int, float]:
        return 2 * (self.base + self.altura)


class Circulo(FiguraGeometrica):
    def __init__(self, raio: int) -> None:
        self.raio = raio

    def area(self) -> Union[int, float]:
        return PI * self.raio * self.raio

    def perimetro(self) -> Union[int, float]:
        return 2 * PI * self.raio
