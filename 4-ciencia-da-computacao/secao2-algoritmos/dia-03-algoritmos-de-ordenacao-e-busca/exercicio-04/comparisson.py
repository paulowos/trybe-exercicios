from merge_sort import merge_sort
from bubble_sort import bubble_sort
from cronometro import Cronometro
from random import shuffle

aleatorio = list(range(10000))
shuffle(aleatorio)


with Cronometro("merge sort"):
    merge_sort(aleatorio)

with Cronometro("bubble sort"):
    bubble_sort(aleatorio)

# merge sort: O(n log n), bubble sort: O(n²)
