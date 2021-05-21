def replaceDigits(s):
    N = len(s)
    ans = ""

    for index in range(N):
        if index % 2 == 0:
            ans += s[index]
        else :
            offset = int(s[index])
            ans += chr(ord(s[index - 1]) + offset)
    return ans


print(replaceDigits("a1c1e1"))
print(replaceDigits("a1b2c3d4e"))
