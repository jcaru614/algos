import random
def randInt(min=0, max=100):
    if min > max: 
        temp = max
        max = min
        min = temp
        return random.randrange(min,max)
    else:
        return random.randrange(min,max)
print(randInt(min = 40, max = 53))

# accounts for any edge cases (eg. min > max, max < 0)