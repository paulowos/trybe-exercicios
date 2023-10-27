def shuffle(deck):  # O(log n)
    mid = len(deck) // 2
    first_half = deck[:mid]
    second_half = deck[mid:]
    shuffled_deck = []
    for i in range(mid):
        shuffled_deck.append(first_half[i])
        shuffled_deck.append(second_half[i])

    return shuffled_deck
