array = [1, 4, 2, 5, 3]
array2 = [1, 2]

def sumOfOddSubArray(arr):
    sum = 0
    length = len(arr)

    for i in range(length):
        for j in range(i, length, 2):
            for k in range(i, j + 1, 1):
                
                sum += arr[k]
                

    return sum

print(sumOfOddSubArray(array))
print(sumOfOddSubArray(array2))
