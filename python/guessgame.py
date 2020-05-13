import random

num = random.randint(1,10)
guess = int(raw_input("Enter a number from 1 to 10"))
while num != guess
    print
    if guess<num
        print"your guess is low"
    elif guess > num
        print "guess is high"
        else
            print "You got it right!"
            break
