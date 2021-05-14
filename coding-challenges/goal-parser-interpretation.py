def interpret(command) :

    replaceO = command.replace("()", 'o')
    replaceLeft = replaceO.replace("(", "")
    replaceRight = replaceLeft.replace(")", "")

    return(replaceRight)

print(interpret("G()(al)"))
print(interpret("G()()()()(al)"))
