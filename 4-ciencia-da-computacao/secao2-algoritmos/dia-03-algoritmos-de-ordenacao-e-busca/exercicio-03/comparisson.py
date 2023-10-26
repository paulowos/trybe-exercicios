from cronometro import Cronometro
from selection_sort import selection_sort
from insertion_sort import insertion_sort
from random import shuffle


ordenados = list(range(100))
inversamente_ordenados = list(reversed(range(100)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles

with Cronometro("Selection Ordenada"):
    selection_sort(ordenados)

with Cronometro("Selection Inverso"):
    selection_sort(inversamente_ordenados)

with Cronometro("Selection Aleatório"):
    selection_sort(aleatorios)


with Cronometro("Insertion Ordenada"):
    insertion_sort(ordenados)

with Cronometro("Insertion Inverso"):
    insertion_sort(inversamente_ordenados)

with Cronometro("Insertion Aleatório"):
    insertion_sort(aleatorios)
