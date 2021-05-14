def createTargetArray(nums, index):
    answer = []

    for position in range(len(index)):
        pos = index[position]

        answer.insert(pos, nums[position])

    return(answer)


print(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]))
print(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]))
