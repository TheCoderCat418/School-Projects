import mapHolder
from time import sleep
from tile import Tile
from createMap import create
import keyboard

def runTing(self, key: keyboard.KeyboardEvent):
    if(self.tookTurn):
        return
    if(key.name == "right"):
        if(mapHolder.map.getRow(self.y).getTile(self.x+1).collides()):
            return
        self.setPlayer(self.x+1,self.y)
        mapHolder.printScreen(mapHolder.map)
        self.tookTurn = True
    if(key.name == "left"):
        if(mapHolder.map.getRow(self.y).getTile(self.x-1).collides()):
            return
        self.setPlayer(self.x-1,self.y)
        mapHolder.printScreen(mapHolder.map)
        self.tookTurn = True
    if(key.name == "up"):
        if(mapHolder.map.getRow(self.y-1).getTile(self.x).collides()):
            return
        self.setPlayer(self.x,self.y-1)
        mapHolder.printScreen(mapHolder.map)
        self.tookTurn = True
    if(key.name == "down"):
        if(mapHolder.map.getRow(self.y+1).getTile(self.x).collides()):
            return
        self.setPlayer(self.x,self.y+1)
        mapHolder.printScreen(mapHolder.map)
        self.tookTurn = True
    return



class Player(Tile):
    char = "U"
    inv = dict()
    x = 1
    y = 1
    tookTurn = False
    def __init__(self):
        super().__init__(None)
    def takeTurn(self):
        self.tookTurn = False
        hook = keyboard.on_press(lambda key: runTing(self, key))
        while(not self.tookTurn):
            sleep(0.5)
        keyboard.unhook(hook)
        return
    def setPlayer(self, x, y):
        newMap = create(mapHolder.name)
        tile = newMap.getRow(self.y).getTile(self.x)
        mapHolder.map.replaceTile(self.x,self.y,tile)
        mapHolder.map.replaceTile(x,y,self)
        self.x = x
        self.y = y
        return
    def spawnPlayer(self, map):
        for i in range(len(map)):
            for j in range(len(map.getRow(i))):
                if(map.getRow(i).getTile(j).getChar().__class__ == "Player"):
                    self.setPlayer(i,j)
                    return self
    def addKey(self, code):
        self.inv.update("key", code)
    def onCollide(self, object):
        pass

