def runningSum(nums):
    answerList = []
    length = len(nums)

    answerList = [sum(nums[0:x:1]) for x in range(1, length+1)]

    return answerList


print(runningSum([1, 2, 3, 4]))
print(runningSum([1, 1, 1, 1, 1]))
