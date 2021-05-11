def smallerNumbersThanCurrent(nums):

    answers = []

    for num in nums:
        count = 0

        for x in nums:
            if num > x:
                count += 1

        answers.append(count)

    return(answers)


print(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))
print(smallerNumbersThanCurrent([6, 5, 4, 8]))
print(smallerNumbersThanCurrent([7, 7, 7, 7]))
