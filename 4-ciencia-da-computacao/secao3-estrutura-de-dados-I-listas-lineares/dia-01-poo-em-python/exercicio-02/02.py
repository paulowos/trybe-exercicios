from dataclasses import dataclass
from typing import List
from collections import Counter


@dataclass
class Estatistica:
    numbers: List[int]

    def media(self) -> float:
        return sum(self.numbers) / len(self.numbers)

    def mediana(self) -> float:
        numbers_sorted = sorted(self.numbers)
        mid = len(self.numbers) // 2
        if len(self.numbers) % 2 == 0:
            return (numbers_sorted[mid - 1] + numbers_sorted[mid]) / 2
        return numbers_sorted[mid]

    def moda(self) -> int:
        count = Counter(self.numbers)
        return count.most_common(1)[0][0]


statistic = Estatistica([10, 10, 40, 6, 8, 23, 12])
print(statistic.moda())

# 4,6,8,10,10,23
