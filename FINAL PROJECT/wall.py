from tile import Tile


class Wall(Tile):
    char = "▧"
    collide = True
    def __init__(self, opDic):
        super().__init__(opDic)
    
    def onCollide(self, object):
        pass