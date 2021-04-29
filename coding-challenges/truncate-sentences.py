string = 'Hello how are you Contestant'
integer = 4

def truncateSentence(string, integer):
    li = list(string.split(' '))
    return(li[0:integer])

print(truncateSentence(string, integer))
