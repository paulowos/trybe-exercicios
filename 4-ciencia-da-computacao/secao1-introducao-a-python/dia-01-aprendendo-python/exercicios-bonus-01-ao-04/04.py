ALCOHOL_PRICE = 1.90
GAS_PRICE = 2.50


def calcAlcoholPriceWithDiscount(liters):
    price = 0.0
    if liters <= 20:
        price = ALCOHOL_PRICE * 0.97
    else:
        price = ALCOHOL_PRICE * 0.95

    return price * liters


def calcGasPriceWithDiscount(liters):
    price = 0.0
    if liters <= 20:
        price = GAS_PRICE * 0.96
    else:
        price = GAS_PRICE * 0.94

    return price * liters


def calcPrice(liters, type):
    if type == "A":
        return calcAlcoholPriceWithDiscount(liters)
    elif type == "G":
        return calcGasPriceWithDiscount(liters)
    else:
        return "type not found"


print(calcPrice(10, "G"))
