def count_evens(n):
    evens = 0
    if n == 0:
        return 1
    if n % 2 == 0:
        evens += 1

    return evens + count_evens(n - 1)


print(count_evens(4))
