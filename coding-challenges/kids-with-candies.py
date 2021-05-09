def kidsWithCandies(candies, extraCandies):
    answer = []

    for candy in candies:
        extras = candy + extraCandies

        if all(x <= extras for x in candies):
            answer.append(True)
        else:
            answer.append(False)

    return(answer)

print(kidsWithCandies([2, 3, 5, 1, 3], 3))
print(kidsWithCandies([4, 2, 1, 1, 2], 1))
