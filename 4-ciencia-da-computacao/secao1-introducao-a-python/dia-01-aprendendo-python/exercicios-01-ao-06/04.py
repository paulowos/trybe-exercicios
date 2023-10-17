def maxLen(list):
    biggerName = ""
    for name in list:
        if len(name) > len(biggerName):
            biggerName = name
    return biggerName


LIST = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

print(maxLen(LIST))
