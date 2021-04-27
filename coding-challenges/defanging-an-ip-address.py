str = '1.1.1.1'


def defangIPaddress(str):
    return str.replace('.', '[.]')


print(defangIPaddress(str))
