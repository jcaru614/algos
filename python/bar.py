# start a class for beer and initialize it with the arguments you want the user to fill in
# arguments are only what we want the user to fill in. arguments will take anything we input and store it as that

# the way we link classes together is by using instance that was created
# so we use pass in the instance or object of borracho as an argument to affect the inventory
class Beer:
    def __init__(self, beer_type, price, size):
        self.beer_type = beer_type
        self.price = price
        self.size = size
    def display_beer(self):
        print(f"{self.beer_type} of {self.size} ${self.price}")
        return self

# Bar class
class Bar:
    def __init__(self, name):
        self.name = name
        self.beer_menu = []
        self.register = 0
        # inventory
        self.items = {}
        # add to inventory
    def add_to_inventory(self,new_item,quantity):
        # self.new_item = Beer(new_item.beer_type,new_item.price,new_item.size)
        self.items[new_item]=quantity
        return self
        # display inventory
    def display_inventory(self):
        print(f"{self.name} inventory is:")
        for item in self.items:
            print(f"Name: {item.beer_type} {item.size} ${item.price}..... Quantity: {self.items[item]}")
        return self
    def beer_to_bar(self,new_beer):
        self.beer_menu.append(new_beer)
        return self
    def display_beer_menu(self):
        print(f"{self.name} Beer Menu:")
        # looping through all the beers in self.beer_menu which is initialzed in the bar self.beer_menu = []
        for beer in self.beer_menu:
            beer.display_beer()
            # then we call on the display beer method to show every single beer in the beer_menu
        return self
        # selling beer which works with the posted price method
        # work on this
    def sell_beer(self, client_name, sold_beer, quantity):
        # we take in the instance of the client name which is joey, then we put in the beer instance of ale, then its quantity
        # if self.items is the list of beers we initialized when making the bar and we use sold_beer and the .price to get just the price of the sold beer which would be an ale or kolsh and check it against its quantity
    #   and we want to also check that the client or Drunk and their client_name.wallet (.wallet is taking the wallet only from teh client_name not the other info)
        if self.items[sold_beer] >= quantity and client_name.wallet >= sold_beer.price*quantity:
            self.register += sold_beer.price*quantity
            client_name.wallet -= sold_beer.price*quantity
            self.items[sold_beer] -= quantity
            return self
        elif self.items[sold_beer] >= quantity and client_name.wallet < sold_beer.price*quantity:
            print(f'sorry {client_name.name} you dont have money')
            return self
        else:
            print("not enough inventory")
        return self
    def display_register(self):
        print(f"{self.name} register has ${self.register}")
        return self

# technically when we make a blueprint for a bar we only worrry about the bar. The client would be completly seperate.
# but you can use the object or instance created and pass that in as an argument to update the bar when the client buys something
class Drunk:
    def __init__(self, name, wallet):
        self.name = name
        self.wallet = wallet
    def buy_beer(self, bar, purchased_beer, quantity):
        if self.wallet > purchased_beer.price and bar.items[purchased_beer] >= quantity:
            self.wallet -= purchased_beer.price * quantity
            bar.items[purchased_beer] -= quantity
            bar.register += purchased_beer.price * quantity
            return self
        elif self.wallet > purchased_beer.price*quantity and bar.items[purchased_beer] < quantity:
            print(f"Can I see the menu again?")
            return self
        else:
            print("Not enough money to buy")
        return self
    def display_wallet(self):
        print(f"{self.name}, has {self.wallet} dollars left")



# creating beers (beer_type, price, size)
ale = Beer("Ale",6,"12oz")
kolsch = Beer("Kolsch",7,"12oz")
lager = Beer("Lager",6,"12oz")
ipa = Beer("IPA",8,"12oz")
stout = Beer("Stout",6,"12oz")
pale_ale = Beer("Pale Ale",7,"12oz")
# creating bars (name)
borracho = Bar('The Last Borracho Bar')
print('********************'*2)
#  getting beers to the bars so it shows on the menu (beer_name)
borracho.beer_to_bar(ale)
borracho.beer_to_bar(kolsch)
borracho.beer_to_bar(lager)
borracho.beer_to_bar(ipa)
borracho.beer_to_bar(stout)
borracho.beer_to_bar(pale_ale)
borracho.display_beer_menu()
#  adding beer to inventory (new_item, quantity)
print('********************'*2)
borracho.add_to_inventory(kolsch,15)
borracho.add_to_inventory(ale,20)
borracho.add_to_inventory(lager,10)
borracho.add_to_inventory(ipa,10)
borracho.add_to_inventory(stout,15)
borracho.add_to_inventory(pale_ale,30)
borracho.display_inventory()
# when we say sell_beer(stout) stout is filling in the one argument we gave which was sold_beer
print('********************'*2)
# (name, wallet)
joey = Drunk("Joey",50)
joey.buy_beer(borracho, ale, 5).buy_beer(borracho,lager,4)
joey.display_wallet()
# selling beer (client_name, sold_beer, quantity)
print('********************'*2)
borracho.sell_beer(joey, ale, 2)
borracho.sell_beer(joey,kolsch,5)
borracho.display_inventory()
borracho.display_register()
joey.display_wallet()


