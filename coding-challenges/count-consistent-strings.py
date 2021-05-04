allowed = "ab" 
words = ["ad", "bd", "aaab", "baa", "badab"]

allowed2 = "abc"
words2 = ["a", "b", "c", "ab", "ac", "bc", "abc"]


def countConsistentStrings(str, list):
    count = 0
    countC = 0

    for word in list:
        countA = word.count(str[0])
        countB = word.count(str[1])

        if len(str) > 2:
            countC = word.count(str[2])

        letters = countA + countB + countC

        # print(letters)

        if letters == len(word):
            count += 1

    return(count)

print(countConsistentStrings(allowed, words))
print(countConsistentStrings(allowed2, words2))
