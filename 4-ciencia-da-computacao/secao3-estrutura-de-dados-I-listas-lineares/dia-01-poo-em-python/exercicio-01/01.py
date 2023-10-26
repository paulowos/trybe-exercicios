class TV:
    def __init__(self, tamanho: int) -> None:
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 1:
            self.__volume -= 1

    def modificar_canal(self, canal: int):
        if 1 <= canal <= 99:
            self.__canal = canal
        else:
            raise ValueError("Canal não existe")

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
