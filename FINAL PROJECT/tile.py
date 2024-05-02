from abc import ABC, abstractmethod


class Tile(ABC):
    char = ""
    collide = False
    opdic = {}
    color = "inv"
    revealed = False
    def __init__(self, opDic):
       
       self.opdic = opDic
    def getChar(self):
        return self.char
    def collides(self):
        return self.collide
    @abstractmethod
    def onCollide(self, object):
        pass