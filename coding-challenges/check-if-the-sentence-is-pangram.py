def checkIfPangram(sentence):
    import string

    alphabet = set(string.ascii_lowercase)

    def ispangram(string):
        return set(string.lower()) >= alphabet

    if (ispangram(sentence) == True):
        return True
    else :
        return False

print(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
