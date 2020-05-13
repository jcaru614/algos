print("this is a sample string")


# Concatenating 

age = 2
print("My age is", age)
# + cannot concatenate with an integer 
name = "joey"
print("My name is " + name)


# using the format method 
first_name = 'joey'
last_name = 'caruana'
age = 25
print(f"my name is {first_name} {last_name} and I am {age} years old")


# using .format method
first_name = "Zen"
last_name = "Coder"
age = 27
print("My name is {} {} and I am {} years old.".format(first_name, last_name, age))
# output: My name is Zen Coder and I am 27 years old.
print("My name is {} {} and I am {} years old.".format(age, first_name, last_name))
# output: My name is 27 Zen and I am Coder years old.





# string.upper(): returns a copy of the string with all the characters in uppercase.
# string.lower(): returns a copy of the string with all the characters in lowercase.
# string.count(substring): returns number of occurrences of substring in string.
# string.split(char): returns a list of values where string is split at the given character. Without a parameter the default split is at every space.
# string.find(substring): returns the index of the start of the first occurrence of substring within string.
# string.isalnum(): returns boolean depending on whether the string's length is > 0 and all characters are alphanumeric (letters and numbers only). Strings that include spaces and punctuation will return False for this method. Similar methods include .isalpha(), .isdigit(), .islower(), .isupper(), and so on. All return booleans.
# string.join(list): returns a string that is all strings within our set (in this case a list) concatenated.
# string.endswith(substring): returns a boolean based upon whether the last characters of string match substring.


# for x in range(0, 10, 1):
# for x in range(0, 10):	# increment of +1 is implied
# for x in range(10):	# increment of +1 and start at 0 is implied
