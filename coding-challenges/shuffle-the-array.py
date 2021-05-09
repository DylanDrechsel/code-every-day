def shuffle(nums, n):
    answers = []

    firstHalf = nums[:n]
    secondHalf = nums[n:]

    for index in range(len(firstHalf)):
        answers.append(firstHalf[index])
        answers.append(secondHalf[index])

    return(answers)


print(shuffle([2, 5, 1, 3, 4, 7], 3))
print(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4))
