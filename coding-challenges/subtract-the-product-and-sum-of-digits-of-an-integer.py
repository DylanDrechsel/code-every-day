def subtractProductAndSum(n):
    product = 1
    sums = 0
    strN = str(n)

    for num in strN:
        product *= int(num)
        sums += int(num)

    answer = product - sums

    return(answer)

print(subtractProductAndSum(234))
print(subtractProductAndSum(4421))
