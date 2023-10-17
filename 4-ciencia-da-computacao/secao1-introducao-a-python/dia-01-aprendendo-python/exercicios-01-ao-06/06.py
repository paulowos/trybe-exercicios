def triangle(a, b, c):
    sum1 = a + b
    sum2 = a + c
    sum3 = b + c
    if sum1 < c or sum2 < b or sum3 < a:
        return "não é triangulo"
    elif a == b == c:
        return "triangulo equilátero"
    elif a == b or a == c or b == c:
        return "triangulo isosceles"
    else:
        return "triangulo escaleno"


print(triangle(1, 2, 3))
