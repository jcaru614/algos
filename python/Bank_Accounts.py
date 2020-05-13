# Bank account class

class BankAccount:
    def __init__(self, number, int_rate = 0.01, balance = 0):
        self.int_rate = int_rate
        self.balance = balance
        self.number = number
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
        else:
            print("Insuficent Funds")
        return self
    # def display_account_info(self):
    #     print("Account Balance is ", self.balance)
    #     return self
    def yield_interest(self):
        if self.balance >= 0:
            self.balance += (self.balance * self.int_rate)
        return self

# user class
class user:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.accounts = {}
    #  create account
    def create_account(self, number, int_rate, balance):
        self.accounts[number] = BankAccount(number, int_rate, balance)
        return self
    def make_deposit(self, amount, number):
        self.accounts[number].deposit(amount)
        return self
    def make_withdrawal(self,amount, number):
        self.accounts[number].withdraw(amount)
        return self
# transfer money
    def transfer_money(self, number, amount, other_user, other_user_number):
        self.accounts[number].balance -= amount
        other_user.accounts[other_user_number].balance += amount
        return self

    def plus_interest(self, number):
        self.accounts[number].yield_interest()
        return self
# display user balance
    def display_user_balance(self, number):
        print("User: ",self.name, ", Balance: ", self.accounts[number].balance, "Number: ", number)
        return self


# Add a display_user_balance method to the User class
joey = user(name = "Joey", email = 'jcaruana@gmail.com')
camila = user(name = 'Camila', email = 'noOneUsesHotmail.com')
tinky = user(name = 'Tinky', email = 'tinky@gmail.com')

camila.create_account(number=789,int_rate=0.01,balance=100).display_user_balance(number=789)

joey.create_account(number=123,int_rate=0.01,balance=100).display_user_balance(number=123).create_account(number=456,int_rate=0.01,balance=50).display_user_balance(number=456).make_deposit(amount=5000,number=123).display_user_balance(number=123).make_withdrawal(amount=8000,number=123).display_user_balance(number=123).plus_interest(number=456).display_user_balance(number=456).plus_interest(number=123).display_user_balance(number=123).transfer_money(123,500,camila,789).display_user_balance(number=123)
camila.display_user_balance(number=789)