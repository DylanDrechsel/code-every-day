accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]]
accounts2 = [[1, 5], [7, 3], [3, 5]]


def maximumWealth(arr):
    res = max(arr, key=sum)
    amount = 0
    
    for i in res:
        amount += i
    
    return amount


print(maximumWealth(accounts))
print(maximumWealth(accounts2))
