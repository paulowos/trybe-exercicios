def count_evens(n):
    evens = 0
    for i in range(n + 1):
        if i % 2 == 0:
            evens += 1
    return evens
