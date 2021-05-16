def subsetXORSum(nums):
    length = len(nums)
    bits = 0

    for i in range(length):
        bits |= nums[i]

    ans = bits * pow(2, length - 1)

    return ans

print(subsetXORSum([1, 3]))
print(subsetXORSum([5, 1, 6]))
