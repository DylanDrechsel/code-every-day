string = "Let's take LeetCode contest"

def reverseWordsInString(str):
    words = str.split(" ")

    newWords = [word[::-1] for word in words]

    newString = " ".join(newWords)

    return newString

print(reverseWordsInString(string))
