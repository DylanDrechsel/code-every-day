def countMatches(items, ruleKey, ruleValue):
    answer = 0

    if ruleKey == 'type':
        index = 0
    elif ruleKey == 'color':
        index = 1
    else :
        index = 2

    for list in items:
        if list[index] == ruleValue:
            answer += 1

    return (answer)

print(countMatches([["phone", "blue", "pixel"], [
    "computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver"))
