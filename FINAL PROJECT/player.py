import mapHolder
from time import sleep
from start import Start
from tile import Tile
from createMap import create
import keyboard

def runTing(self, key: keyboard.KeyboardEvent):
    if(self.tookTurn):
        return

    if(key.name == "right"):
        newTile = mapHolder.map.getRow(self.y).getTile(self.x+1)
        newTile.beforeCollide()
        if(mapHolder.map.getRow(self.y).getTile(self.x+1).collides()):
            newTile.attemptedCollide()
            return
        self.setPlayer(self.x+1,self.y)
        mapHolder.printScreen(mapHolder.map)
        self.tookTurn = True
        newTile.onCollide()
    if(key.name == "left"):
        newTile = mapHolder.map.getRow(self.y).getTile(self.x-1)
        newTile.beforeCollide()
        if(mapHolder.map.getRow(self.y).getTile(self.x-1).collides()):
            newTile.attemptedCollide()
            return
        self.setPlayer(self.x-1,self.y)
        mapHolder.printScreen(mapHolder.map)
        self.tookTurn = True
        newTile.onCollide()
    if(key.name == "up"):
        newTile = mapHolder.map.getRow(self.y-1).getTile(self.x)
        newTile.beforeCollide()
        if(mapHolder.map.getRow(self.y-1).getTile(self.x).collides()):
            newTile.attemptedCollide()
            return
        self.setPlayer(self.x,self.y-1)
        mapHolder.printScreen(mapHolder.map)
        self.tookTurn = True
        newTile.onCollide()
    if(key.name == "down"):
        newTile = mapHolder.map.getRow(self.y+1).getTile(self.x)
        newTile.beforeCollide()
        if(mapHolder.map.getRow(self.y+1).getTile(self.x).collides()):
            newTile.attemptedCollide()
            return
        self.setPlayer(self.x,self.y+1)
        mapHolder.printScreen(mapHolder.map)
        self.tookTurn = True
        newTile.onCollide()
    return



class Player(Tile):
    char = "U"
    inv = []
    x = 1
    y = 1
    tookTurn = False
    def __init__(self):
        super().__init__(dict())
    def takeTurn(self):
        self.tookTurn = False
        hook = keyboard.on_press(lambda key: runTing(self, key))
        while(not self.tookTurn):
            sleep(0.5)
        keyboard.unhook(hook)
        return
    def setPlayer(self, x, y):
        newMap = create(f"MAP{str(mapHolder.id)}")
        oldTile = newMap.getRow(self.y).getTile(self.x)
        newTile = newMap.getRow(y).getTile(x)
        mapHolder.map.replaceTile(self.x,self.y,oldTile)
        mapHolder.map.replaceTile(x,y,self)
        self.x = x
        self.y = y
        return newTile
    def spawnPlayer(self, map):
        for i in range(len(map)):
            for j in range(len(map.getRow(i))):
                if(map.getRow(i).getTile(j).__class__ == Start):
                    self.setPlayer(i,j)
                    return self
    def addKey(self, code):
        if self.inv.count("key;"+code) == 0:
            self.inv.append("key;"+code)
    def hasKey(self,code):
        return self.inv.count("key;"+code)
    def onCollide(self):
        pass
    def attemptedCollide(self):
        pass
    def beforeCollide(self):
        pass

