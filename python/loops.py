
# for x in range(0, 10, 1):
# for x in range(0, 10):	# increment of +1 is implied
# for x in range(10):	# increment of +1 and start at 0 is implied


my_list = ["abc", 123, "xyz"]
for i in range(0, len(my_list)):
    print(i, my_list[i])
# output: 0 abc, 1 123, 2 xyz
    
# OR 
    
for i in my_list:
    print(i)
# output: abc, 123, xyz


my_dict = { "name": "Noelle", "language": "Python" }
for k in my_dict:
    print(my_dict[k])
# output: Noelle, Python


# another way to iterate through the keys
for key in my_dict.keys():
     print(key)
#to iterate through the values
for val in my_dict.values():
     print(val)
#to iterate through both keys and values
for key, val in my_dict.items():
     print(key, " = ", val)


for val in "string":
    if val == "i":
        break
    print(val)
# output: s, t, r

for val in "string":
    if val == "i":
        continue
    print(val)
# output: s, t, r, n, g
# notice, no i in the output, but the loop continued after the i

