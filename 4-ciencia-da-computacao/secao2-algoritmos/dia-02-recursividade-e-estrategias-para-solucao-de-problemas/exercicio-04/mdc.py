def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)


def mdc_r(a, b):
    while b != 0:
        a, b = b, a % b

    return a


print(mdc_r(10, 5))
