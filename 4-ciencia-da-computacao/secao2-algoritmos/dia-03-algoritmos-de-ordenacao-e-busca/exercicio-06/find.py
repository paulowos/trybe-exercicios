def find(arr):
    start = 0
    end = len(arr)
    while end >= start:
        mid = (start + end) - 1

        if arr[mid] is False:
            end = mid - 1
        else:
            start = mid + 1

    return start


entrada1 = [True, True, True, True, False, False, False]  # saída: 4
entrada2 = [True, True, False, False, False, False, False]  # saída: 2

print(find(entrada1))
print(find(entrada2))
