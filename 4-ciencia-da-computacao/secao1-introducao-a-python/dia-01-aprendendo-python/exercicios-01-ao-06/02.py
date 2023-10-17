def avg(list):
    total = 0
    for num in list:
        total += num
    return total / len(list)


print(avg([8, 8, 8, 0]))
