#get user email
email = input("What is your email?").strip()

#slick out user name
user = email[:email.index("@")]

#slice out domain name

domain = email[email.index("@") + 1 :]

#format message
output = ("Hello your user name is {} and your domain is {}").format(user,domain)
#display output message

print(output)

