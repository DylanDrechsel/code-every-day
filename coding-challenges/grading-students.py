grades = [4, 73, 67, 38, 33]

for grade in grades:

    if grade >= 38:
        if grade % 5 > 2:
            while grade % 5 != 0: grade += 1
    print(grade)