def decode(encoded, first):
    ans = [first]

    for x in encoded:
        ans.append(ans[-1] ^ x)
    return ans


print(decode([1, 2, 3], 1))
