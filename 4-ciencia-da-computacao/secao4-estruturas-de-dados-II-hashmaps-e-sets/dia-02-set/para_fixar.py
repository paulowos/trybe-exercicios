class Conjunto:
    def __init__(self) -> None:
        self.set = [False for _ in range(1001)]
        self.last_element = 0

    def add(self, item):
        if 0 <= item <= 1000:
            self.set[item] = True

        if item > self.last_element:
            self.last_element = item

    def __str__(self) -> str:
        ans = "{"
        for i in range(len(self.set)):
            if self.set[i] is True:
                ans += f"{i}"
                if i < self.last_element:
                    ans += ", "
        ans += "}"
        return ans

    def __contains__(self, item):
        try:
            return self.set[item]
        except IndexError:
            return False

    def intersection(self, conjunto_b):
        new_conjunto = Conjunto()
        for i in range(1001):
            if self.set[i] and conjunto_b.set[i]:
                new_conjunto.add(i)
        return new_conjunto

    def union(self, conjunto_b):
        new_conjunto = Conjunto()
        for i in range(1001):
            if self.set[i] or conjunto_b.set[i]:
                new_conjunto.add(i)
        return new_conjunto

    def difference(self, conjunto_b):
        new_conjunto = Conjunto()
        for i in range(1001):
            if self.set[i] and not conjunto_b.set[i]:
                new_conjunto.add(i)
        return new_conjunto

    def issubset(self, conjunto_b):
        for i in range(1001):
            if self.set[i] and not conjunto_b.set[i]:
                return False
        return True

    def issuperset(self, conjunto_b):
        for i in range(1001):
            if conjunto_b.set[i] and not self.set[i]:
                return False
        return True


if __name__ == "__main__":
    # conjunto_a = Conjunto()
    # conjunto_b = Conjunto()

    # for i in range(10, 11):
    #     conjunto_a.add(i)

    # for i in range(10, 21):
    #     conjunto_b.add(i)

    # print(conjunto_a)
    # print(conjunto_b)

    # print(conjunto_a.issuperset(conjunto_b))

    estudantes = Conjunto()
    lista1_entregues = Conjunto()
    lista2_entregues = Conjunto()

    for i in range(1, 8):
        estudantes.add(i)

    lista1_entregues.add(1)
    lista1_entregues.add(4)
    lista1_entregues.add(7)
    lista1_entregues.add(3)

    lista2_entregues.add(3)
    lista2_entregues.add(1)
    lista2_entregues.add(6)

    print("Quem ainda não entregou a lista1?")
    print(estudantes.difference(lista1_entregues))
    print()

    print("Quem já entregou as duas listas?")
    list1_2 = lista1_entregues.intersection(lista2_entregues)
    print(estudantes.intersection(list1_2))
    print()

    print("Quem já entregou qualquer uma das duas listas?")
    list_union = lista1_entregues.union(lista2_entregues)
    print(estudantes.intersection(list_union))
    print()

    print("Quem ainda não entregou nenhuma das listas?")
    print(estudantes.difference(list_union))
