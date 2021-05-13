def decompressRLElist(nums):
    return[nums[i + 1] for i in range(0, len(nums), 2) for _ in range(nums[i])]


print(decompressRLElist([1, 2, 3, 4]))
print(decompressRLElist([1, 1, 2, 3]))
