from tile import Tile


class Wall(Tile):
    char = "▧"
    collide = True
    def __init__(self, opDic):
        super().__init__(opDic)
    
    def onCollide(self):
        pass
    def attemptedCollide(self):
        print("That's a wall")
    def beforeCollide(self):
        pass