def halveAreAlike(s):
    countFirstHalf = 0
    countSecondHalf = 0

    vowel = set("aeiouAEIOU")

    firstHalf = s[0:len(s)//2]
    secondHalf = s[len(s)//2 if len(s) % 2 == 0 else ((len(s)//2)+1):]

    for letter in firstHalf:
        if letter in vowel:
            countFirstHalf += 1

    for letter in secondHalf:
        if letter in vowel:
            countSecondHalf += 1

    if countFirstHalf == countSecondHalf:
        return True
    else:
        return False

print(halveAreAlike("book"))
print(halveAreAlike("textbook"))
print(halveAreAlike("AbCdEfGh"))
