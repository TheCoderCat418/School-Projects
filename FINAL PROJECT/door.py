from tile import Tile
import importlib

class Door(Tile):
    char = "D"
    code = ""
    collide = False
    key = ""
    hasIs = False
    def __init__(self, opDic):
        super().__init__(opDic)
        for i in self.opdic.keys():
            if i == "is":
                self.hasIs = True
            if i == "open":
                self.collide = True
        if self.hasIs:
            self.code = self.opdic["is"]
        if self.collide:
            self.key = self.opdic["open"]
    def onCollide(self):
        mapHolder = importlib.import_module("mapHolder")
        if self.hasIs:
            mapHolder.player.addKey(self.code)
    def attemptedCollide(self):
        if self.collide:
            print("The door is locked!")
    def beforeCollide(self):
        mapHolder = importlib.import_module("mapHolder")
        if self.collide:
            if mapHolder.player.hasKey(self.key) == 1:
                self.collide = False

