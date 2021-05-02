word1 = ["ab", "c"]
word2 = ["a", "bc"]

word3 = ["a", "cb"]
word4 = ["ab", "c"]

def checkTwoStringsArrays(arr, arr2):
    str1 = ""
    str2 = ""

    for ele in arr:
        str1 += ele

    for ele in arr2:
        str2 += ele

    if str1 == str2:
        return True
    else:
        return False


print(checkTwoStringsArrays(word1, word2))
print(checkTwoStringsArrays(word3, word4))
