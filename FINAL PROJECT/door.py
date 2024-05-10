from tile import Tile
import mapHolder

class Door(Tile):
    char = "D"
    code = ""
    hasIs = False
    def __init__(self, opDic):
        super().__init__(opDic)
        for i in self.opdic.keys():
            if i == "is":
                self.hasIs = True
        if self.hasIs:
            self.code = self.opdic["is"]
    def onCollide(self):
        if self.hasIs:
            mapHolder.player.addKey(self.code)