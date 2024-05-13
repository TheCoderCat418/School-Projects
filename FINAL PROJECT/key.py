from tile import Tile
import mapHolder
class Key(Tile):
    char = "⚿"
    code = "NUll"
    def __init__(self, opDic):
        super().__init__(opDic)
        self.code = self.opdic["is"]
    def onCollide(self):
        pass
    def attemptedCollide(self):
        pass
    def beforeCollide(self):
        mapHolder.player.addKey(self.code)
        