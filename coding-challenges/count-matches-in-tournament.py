def numberOfMatches(contestants, matches):
    contestants = contestants

    """ Base Case """
    if contestants <= 1:
        return matches  
    elif contestants % 2 == 0 and contestants > 1:
        roundMatch = contestants / 2
        contestants = int(contestants / 2)
        matches += int(roundMatch)
    elif contestants % 2 == 1 and contestants > 1:
        roundMatch = (contestants / 2) - .5
        contestants = int((contestants / 2) + .5)
        matches += int(roundMatch)

    """ Recursive Statement """

    return numberOfMatches(contestants, matches)



   
        



print(numberOfMatches(7, 0))
