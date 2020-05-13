# Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).

def count_down(x):
    new_list = []
    while x > -1:
        new_list.append(x) 
        x = x -1
    return new_list
print(count_down(5))


def count_down1(num):
    newer_list = []
    for num in range(num,-1,-1):
        newer_list.append(num)
    return newer_list
print(count_down1(5))

# Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.
# Example: print_and_return([1,2]) should print 1 and return 2

def print_return(list1):
    print(list1[0])
    return list1[1]
x = print_return([1,2])
print(x)

# First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.
# Example: first_plus_length([1,2,3,4,5]) should return 6 (first value: 1 + length: 5)

def first_plus_length(thelist):
    return thelist[0] + len(thelist)
ret = first_plus_length([1,2,3,4,5,6]) 
print (ret)


# Values Greater than Second - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return False
def greater_than_second(the_list):
    newest_list = []
    if len(the_list) < 2:
        return False
    for val in the_list:
        if val > the_list[1]:
            newest_list.append(val)
    print(len(newest_list))
    return newest_list
print(greater_than_second([1,2,3,4,1,5]))

def greater_than_second(the_list):
    newest_list = []
    if len(the_list) < 2:
        return False
    for i in range(0,len(the_list),1):
        if the_list[i] > the_list[1]:
            newest_list.append(the_list[i])
    print(len(newest_list))
    return newest_list
print(greater_than_second([1,2,3,4,1,5]))

# This Length, That Value - Write a function that accepts two integers as parameters: size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.

def length_value(size, value):
    list_new = []
    for size in range(0, size, 1):
        list_new.append(value)
    return list_new
print(length_value(4,2))