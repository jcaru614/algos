# Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]

def biggie_size(lst):
    for val in range(0,len(lst),1):
        if lst[val] > 0:
            lst[val] = 'big'
    return lst
print(biggie_size([1,2,-1,-2]))

# Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
def count_pos(lst):
    count = 0
    for i in range(0,len(lst),1):
        if lst[i] > 0:
            count = count + 1
    lst[-1] = count
    return lst
print(count_pos([1,2,3,-3]))


# Sum Total - Create a function that takes a list and returns the sum of all the values in the array.

def sum_total(lst):
    sum = 0
    for i in lst:
        sum = sum + i
    return sum
print(sum_total([1,2,3]))

# Average - Create a function that takes a list and returns the average of all the values.
# Example: average([1,2,3,4]) should return 2.5

def avg_joe(lst):
    count = 0
    for val in lst:
        count = count + val
    return count/len(lst)
print(avg_joe([1,2,3,4]))

def average(a_list):
    sum_values = 0
    for val in a_list:
        sum_values = sum_values + val
    return sum_values/len(a_list)

print(average([1,2,3,4]))

# Length - Create a function that takes a list and returns the length of the list.
def list_len(lst):
    return len(lst)
print(list_len([1,2,3,4]))

# Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.

def minimum_val(lst):
    min = lst[0]
    for i in range(1,len(lst),1):
        if lst[i] < min:
            min = lst[i]
        elif lst == []:
            return False
    return min
print(minimum_val([1,2,3,-2]))

# Maximum - Create a function that takes a list and returns the maximum value in the array. If the list is empty, have the function return False.

def max_val(lst):
    max = lst[0]
    for i in range(1,len(lst),1):
        if lst[i] > max:
            max = lst[i]
        elif lst == []:
            return False
    return max
print(max_val([1,2,-1,7]))

# Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.

def ult_analysis(lst):
    dicti = {}
    sum_total = 0
    min_value = lst[0]
    max_value = lst[0]
    for val in lst:
        sum_total = sum_total + val
        if val < min_value:
            min_value = val
    for val in lst:
        if val > max_value:
            max_value = val
    dicti['sum_total'] = sum_total
    dicti['average'] = sum_total/len(dicti)
    dicti['min_value'] = min_value
    dicti['max_value'] = max_value
    dicti['length'] = len(dicti)
    return dicti
print(ult_analysis([2,5,9,7]))

# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)

def reverse(lst):
    for i in range(0,(len(lst)//2),1):
        temp = lst[i]
        lst[i] = lst[-1-i]
        lst[-1-i] = temp
    return lst
print(reverse([1,2,3,4]))
