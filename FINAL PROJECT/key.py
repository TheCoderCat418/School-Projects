from tile import Tile

class Key(Tile):
    char = "⚿"
    code = "Red"
    def __init__(self, opDic):
        super().__init__(opDic)
    def onCollide(self):
        pass
        