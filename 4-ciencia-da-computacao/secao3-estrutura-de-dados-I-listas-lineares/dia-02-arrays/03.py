def calc_combinations(products):  # O(nm)
    combinations = 0
    for i in range(len(products)):
        for j in range(i + 1, len(products)):
            if products[i] == products[j]:
                combinations += 1
    return combinations


produtos = [1, 3, 1, 1, 2, 3]
print(calc_combinations(produtos))
