n = int(input())
height_i = [int(x) for x in input().split(' ')]

max_num, max_count = 0, 0
for height in height_i:
    if height == max_num:
        max_count += 1
    elif height > max_num:
        max_num = height
        max_count = 1
print(max_count)
