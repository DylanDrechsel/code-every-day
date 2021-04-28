str1 = 'codeleet'
indices1 = [4, 5, 6, 7, 0, 1, 2, 3]

str2 = 'art'
indices2 = [1, 0, 2]

def restoreString(str, indices):
    properStr = ''  

    for index in indices:
        newCharacter = str[index]
        properStr = f'{properStr}{str[index]}'

        if len(properStr) == len(str):
            return properStr

print (restoreString(str1, indices1))
print(restoreString(str2, indices2))
