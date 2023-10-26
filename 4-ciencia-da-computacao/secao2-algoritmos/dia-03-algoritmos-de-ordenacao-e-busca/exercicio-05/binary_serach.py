def binary_search_recursive(arr, start, end, target):
    if end >= start:
        mid = (end + start) // 2

        if arr[mid] == target:
            return mid

        if arr[mid] > target:
            return binary_search_recursive(arr, start, mid - 1, target)

        else:
            return binary_search_recursive(arr, mid + 1, end, target)

    else:
        return -1


def binary_search_iterative(arr, target):
    end = len(arr) - 1
    start = 0

    while end >= start:
        mid = (end + start) // 2

        if arr[mid] == target:
            return mid

        if arr[mid] > target:
            end = mid - 1

        else:
            start = mid + 1

    return -1


array = [1, 8, 9, 11, 24, 45, 60, 78, 79, 85, 100]
# print(binary_search_recursive(array, 0, len(array) - 1, 1001))
print(binary_search_iterative(array, 100))
