from tile import Tile
class Floor(Tile):
    char = " "
    def onCollide(self):
        print("Floor")
        pass
    def attemptedCollide(self):
        pass
    def beforeCollide(self):
        pass