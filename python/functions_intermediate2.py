# Update Values in Dictionaries and Lists
x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]
x[1][0]=15
print(x)
students[0]['last_name']='Bryant'
print(students)
sports_directory['soccer'][0]='Andres'
print(sports_directory)
z[0]['y']=30
print(z)

# Iterate Through a List of Dictionaries

def iterateDictionary(some_list):
    for key in range(0,len(some_list),1):
        print (some_list[key].items())
students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
iterateDictionary(students)


# Get Values From a List of Dictionaries
def iterateDict(key_name, some_list):
    for i in range(0,len(some_list),1):
        print((some_list[i][key_name]))

students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

# iterateDict('first_name', students)


# Iterate Through a Dictionary with List Values
def printInfo(some_dict):
    for key in some_dict:
        first_val = key
        print(len(some_dict[key]),first_val)
        for value in some_dict[key]:
            the_values = value
            print(the_values)

dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

printInfo(dojo)