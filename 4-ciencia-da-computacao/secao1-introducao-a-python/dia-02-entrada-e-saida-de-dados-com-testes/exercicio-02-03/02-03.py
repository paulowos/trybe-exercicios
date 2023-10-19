import random

with open("words.txt") as file:
    WORDS_LIST = [word[0 : len(word) - 1] for word in file]


selected_word = random.choice(WORDS_LIST)

scrambled_word = "".join(random.sample(selected_word, len(selected_word)))

chances = 3
turn = 1

while turn <= chances:
    print(scrambled_word)
    guess = input("Qual a palavra: ")
    if guess.upper() == selected_word:
        print("Você acertou")
        break

    if turn == chances:
        print("Fim de Jogo")
    else:
        print(f"Voce errou, mais {chances-turn} chance(s)")
    print(" ")
    turn += 1
