# create a gun class
# name, caliber, rounds

class Gun:
    def __init__(self, gun, caliber, rounds):
        self.gun = gun
        self.caliber = caliber
        self.rounds = rounds
    def display_gun(self):
        print(f'Gun: {self.gun}, Caliber: {self.caliber}, Rounds: {self.rounds}')
        return self

# create a shooter class
class Shooter:
    def __init__(self, name):
        self.name = name
        self.armory = None
        self.rounds = None
    def display_shooter(self):
        print(f'Shooter name is: {self.name}')
        return self
# get the gun
    def get_gun(self, gun):
        # we pass in the Gun class for gun then display its self.gun by using the .
        self.armory = gun.gun
        self.rounds = gun.rounds
    def display_armory(self):
            print("Armory:", self.armory, 'rounds', self.rounds)
# shoot the gun
    def shoot_gun(self, gun_name, rounds):
        self.rounds -= rounds
    def display_shot_gun(self):
        print(self.rounds)

glock = Gun("Glock","9mm",15).display_gun()
print('**************************************'*2)
joey = Shooter("Joey").display_shooter()
print('**************************************'*2)
joey.get_gun(glock)
print('**************************************'*2)
joey.display_armory()

joey.display_shot_gun()
joey.shoot_gun(glock,10)
joey.display_shot_gun()