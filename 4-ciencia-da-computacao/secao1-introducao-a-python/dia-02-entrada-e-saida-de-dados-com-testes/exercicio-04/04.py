import json
import csv


def get_data():
    with open("books.json") as file:
        books = json.loads(file.read())
    return books


def count_categories():
    books = get_data()
    CATEGORIES_COUNT = {}
    for book in books:
        for category in book["categories"]:
            capitalized = category.upper()
            if not CATEGORIES_COUNT.get(capitalized):
                CATEGORIES_COUNT[capitalized] = 0
            CATEGORIES_COUNT[capitalized] += 1
    return CATEGORIES_COUNT.items()


def get_percents():
    total = len(get_data())
    categories_count = count_categories()
    categories_percents = []
    for category, count in categories_count:
        categories_percents.append((category, (count / total) * 100))
    return categories_percents


def save_data():
    percents = get_percents()
    HEADERS = ["categoria", "porcentagem"]
    with open("porcentagens.csv", encoding="utf-8", mode="w") as file:
        writer = csv.writer(file)
        writer.writerow(HEADERS)
        writer.writerows(percents)


save_data()
