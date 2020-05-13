
# NUMBERS

# Integers
a = 10
b = 39

# Floating Point Numbers
z = 78.4
y = 24.3


# STRINGS

# Basic
my_string = "This is my string"
other_string = 'This is my string'

# Indexing
print(my_string[2]) # with Python index start at 0
print(my_string[-1]) # To get the last letter or index of the string use -1

# Slicing
print(my_string[4:]) # To slice from a specific part until the end, select the index number where you want to start followed by a colon (:)
print(other_string[:10]) # To slice from the beggining until a specific part, start with a colon (:) followed by the index number after where you want to ended. Python start from index 0 all the way but not included the number of the index that you select.
print(other_string[4:10]) # To slice from a specific start until a specific end. selesct the index number of the starting point followed by a colon (:) followed by the by the index number after where you want to ended. Python start from index 0 all the way but not included the number of the index that you select.
print(other_string[:]) # Use colon (:) to grab the entire string.
print(other_string[::3]) # Use doble colon (::) to select the entire string, followed by a number to specifed how many times you want to slice

# Basic Methods
mayusculas = my_string.upper() # upper() convert the string to uppercase.
print(mayusculas)
minusculas = other_string.lower() # lower() convert the string to lowercase.
print(minusculas)
capital = other_string.capitalize() # capitalize() convert the first letter of a string to Capital.
print(capital)
separar = my_string.split() # split() split a string, if is not specified where to split it, it will split on the spaces by default, if you defined the letter where you want to split it, it will take out the letter and splt it from there.
print(separar)

# Print Formatting
insertar = "Insert another string here: {}".format("Insert ME!") # format() to insert a string inside another string, use {}
print(insertar)

# LISTS

my_list = [1, "list can have strings numbers, boleans at the same time", 14, 2, 3, 4, 5, 6, True,] # Lists "arrays" can have strings, numbers, boleans on one or at the same time, with booleans the firts letter should be capitalize: ej: True, False
myotherlist = [45, 23, 546, 12]
other_list = ["one string", "two strings", 'more strings']
list_letters = ['a', 'b', 's', 'g', 'c', 'd', 'x', 'y', 'z']
list_numbers = [6, 4 , 23, 12, 76, 34, 1, 98, 45, 2, 65, 5]
print(my_list)
print(len(myotherlist)) # Use len() to know the lenght
other_list[2] = "3 string" # List are mutable, you can change the value by caliing the variable, selecting the index you want to change, follow by a = and finaly the new value
print(other_list)
my_list.append(False) # Use append() to add more values at the end of the list, you can added as a only value or as a another list
my_list.append(["you can append strings", "numbers", "booleans", "or another list"])
print(my_list)
my_list.extend(other_list) # Use extend() to include another list.
print(my_list)
myotherlist.pop() # Use pop() to pop off the last item of the list, if you want to pop off a specifc item, you just have to specifed the index number in the parentesis, pop() methond retunr an item, you can save this item in a varible
print(myotherlist)
my_list.pop(2)
print(my_list)
list_letters.reverse() # Use reverse() to change the order of the list
print(list_letters)
list_numbers.sort() # Use sort() to organice the data in the list
print(list_numbers)
list_letters.sort()
print(list_letters)


# INDEXING
print(my_string[2]) # with Python index start at 0
print(my_string[-1]) # To get the last letter or item of the string or the list use -1
print(myotherlist[2])
print(my_list[1][2]) # Use brackets to access nasted list items


# DICTIONARIES

dictionary = {"key1" : "value1", "key2" : "value2", "key3" : "value3", "key4" : "value4",} # Dictionaries have keys : values, can have diferent type or date, like strings, numbers o even list, it is mutable, dictionares dont have a order.
dictionary['key3'] = "another value"
print(dictionary)


# TUPLES
t = (1,2,3) #Tuples are like list but for tuples use () instead of [], and are inmutable.


# BOOLEANS
True #Fist letter is capital
False
0
1


# SETS
x = set() #For SETS use the set() keyword, sets are unordered, it takes in unique elements.
x.add(23)
x.add(1)
x.add(3)
x.add(2)
print(x)
