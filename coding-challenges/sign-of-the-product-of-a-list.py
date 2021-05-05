def arraySign(nums):
    result = 1

    for num in nums:
        result *= num

    if result > 0:
        return 1
    elif result < 0:
        return -1
    else:
        return 0

print(arraySign([-1, -2, -3, -4, 3, 2, 1]))
print(arraySign([1, 5, 0, 2, -3]))
print(arraySign([-1, 1, -1, 1, -1]))
