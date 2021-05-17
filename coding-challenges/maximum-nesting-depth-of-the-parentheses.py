def maxDepth(s):
    checkVPS = s.find("(")
    count = 0
    maxNum = 0

    if checkVPS >= 0:
        for index in range(len(s)):
            if s[index] == '(':
                count += 1
            if maxNum < count:
                maxNum = count
            if s[index] == ')':
                count -= 1

    return maxNum


print(maxDepth("(1+(2*3)+((8)/4))+1"))
print(maxDepth("1+(2*3)/(2-1)"))
