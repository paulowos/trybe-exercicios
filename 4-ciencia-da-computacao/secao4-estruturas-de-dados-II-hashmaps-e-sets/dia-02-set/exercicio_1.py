def blefe(entrada):  # total = O(n)
    player1, player2 = entrada.items()  # O(n)
    set1 = set(player1[1])  # O(n)
    set2 = set(player2[1])  # O(n)

    set1_diff = set1.difference(set2)  # O(1)
    set2_diff = set2.difference(set1)  # O(1)

    p1_game_point = max(set1_diff)  # O(1)
    p2_game_point = max(set2_diff)  # O(1)

    p1_redutor = min(set1_diff)  # O(1)
    p2_redutor = min(set2_diff)  # O(1)

    p1_total_points = p1_game_point - p1_redutor
    p2_total_points = p2_game_point - p2_redutor

    if p1_total_points > p2_total_points:
        return player1[0]
    else:
        return player2[0]


entrada = {"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]}

print(blefe(entrada))
