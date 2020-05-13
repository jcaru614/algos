# # #1
# def a():
#     return 5
# print(a())
# # returns 5


# # #2
# def a():
#     return 5
# print(a()+a())
# #  10

# # #3
# def a():
#     return 5
#     return 10
# print(a())
# # returns only 5 


# # #4
# def a():
#     return 5
# print(10)
# print(a())
# # prints 10 then prints 5 from the function

# # #5
# def a():
#     print(5)
# x = a()
# print(x)
# # prints 5 but no return value so x gives us none

# # #6
# def a(b,c):
#     print(b+c)
# print(a(1,2) + a(2,3))
# # no return so no value to make a sum

# # #7
# def a(b,c):
#     return str(b)+str(c)
# print(a(2,5))
# #print "2" "5"


# # # #8
# def a():
#     b = 100
#     print(b)
#     if b < 10:
#         return 5
#     else:
#         return 10
#     return 7
# print(a())
# # # prints 100 and returns 10



# #9
# def a(b,c):
#     if b < c:
#         return 7
#     else:
#         return 14
#     return 3
# print(a(2,3))
# print(a(5,3))
# print(a(2,3) + a(5,3))
# # returns 7
# # returns 14
# # returns 21

# #10
# def a(b,c):
#     return b+c
#     return 10
# print(a(3,5))
# # print 8

# #11
# b = 500
# print(b)
# def a():
#     b = 300
#     print(b)
# print(b)
# a()
# print(b)
# # print 500 print 500 print 300 print 500 

# # #13
# # b = 500
# print(b)
# def a():
#     b = 300
#     print(b)
#     return b
# print(b)
# b=a()
# print(b)
# # 500 500 300 300


# #14
# def a():
#     print(1)
#     b()
#     print(2)
# def b():
#     print(3)
# a()
# # prints 1, 3, 2

# #15
# def a():
#     print(1)
#     x = b()
#     print(x)
#     return 10
# def b():
#     print(3)
#     return 5
# y = a()
# print(y)
# # prints 1, 3, 5, 10






