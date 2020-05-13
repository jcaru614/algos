class Products:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
    def update_price(self, percent_change, is_increased):
        if is_increased == True:
            self.price += (self.price*percent_change)
            # print(self.price)
            return self
        else:
            self.price -= (self.price*percent_change)
        # print(self.price)
            return self
    def print_info(self):
        print("Item: ", self.name, ", quantity: ", self.quantity.capitalize(), ",Price: ", self.price)


class Store:
    def __init__(self, name):
        self.name = name
        self.products_list = {}
        self.register = 0
        print(self.name)
    def add_product(self, name, price, quantity):
        self.products_list[name](Products(name, price, quantity))
        print(self.products_list)
        return self
    def sell_product(self, name, price, quantity):
        self.products_list[name]
        return self


# create a Store
# camila = Store(Store = "Camila's Arepa House", list = [])
# # add Products
# arepa = Products(name = "Arepa", price = 3, quantity = "food")
# empanada = Products(name = "Empanada", price = 5, quantity = "food")
# arepa.update_price(0.10, True).print_info()

camila = Store("Camila's Arepa House")

arepa = Products("arepa", 5, 'food')

camila.add_product("arepa", 5, 'food')
