def fizz_buzz(n):
    values = list(range(1, n + 1))
    new_values = []
    for value in values:
        text = ""
        if value % 3 == 0:
            text += "Fizz"
        if value % 5 == 0:
            text += "Buzz"
        if not text:
            text = value
        new_values.append(text)
    return new_values


print(fizz_buzz(15))
