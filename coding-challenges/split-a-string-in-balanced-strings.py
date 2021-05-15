def balancedStringSplit(s):
    leftCount = 0
    rightCount = 0
    answer = 0

    if len(s) == 1:
        return 0

    for char in s:
        if char == 'L':
            leftCount += 1
    else :
        rightCount += 1

    if leftCount == rightCount:
        answer += 1
    return answer


print(balancedStringSplit("RLRRLLRLRL"))
print(balancedStringSplit("RLLLLRRRLR"))
