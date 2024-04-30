class Tile:
    char = ""
    collide = False
    opdic = {}
    revealed = False
    def __init__(self, opDic):
       self.opdic = opDic
    def getChar(self):
        return self.char
    def collides(self):
        return self.collide