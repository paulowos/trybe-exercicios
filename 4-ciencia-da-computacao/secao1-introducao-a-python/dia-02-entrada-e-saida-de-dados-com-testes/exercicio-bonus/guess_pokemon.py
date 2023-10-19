import json
import random


def get_data():
    with open("pokemons.json") as file:
        data = json.loads(file.read())
    return data["results"]


def start_game():
    pokemon = random.choice(get_data())["name"]
    hint = ""
    for i in range(len(pokemon)):
        guess = input("Quem é esse pokémon? ")
        if guess.upper() != pokemon.upper():
            hint += pokemon[i]
            if i == len(pokemon) - 1:
                print(f"Fim de Jogo, o Pokémon era: {pokemon}")
            else:
                print(f"Dica: {hint}")
        else:
            print(f"Acertou: {pokemon}")
            return


start_game()
