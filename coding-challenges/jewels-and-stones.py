def numJewelsInStones(jewels, stones):
    count = 0

    for letter in jewels:
        for stone in stones:
            if letter == stone:
                count += 1

    return(count)

print(numJewelsInStones("aA", "aAAbbbb"))
print(numJewelsInStones("z", "ZZ"))
