def arrayStringsAreEqual(word1, word2):
    str1 = ""
    str2 = ""

    for ele in word1:
        str1 += ele

    for ele in word2:
        str2 += ele

    if str1 == str2:
        return True
    else :
        return False


print(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))
