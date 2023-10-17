import math

COVER = 3
CAN_SIZE = 18


def paintToBuy(area):
    litres = area / COVER
    cans = math.ceil(litres / CAN_SIZE)
    totalPrice = cans * 80.00

    return (cans, totalPrice)


print(paintToBuy(109))
