import mapHolder
from time import sleep
from tile import Tile
from createMap import create
import keyboard

def runTing(self, key: keyboard.KeyboardEvent):
    if(self.tookTurn):
        return
    if(key.name == "right"):
        self.setPlayer(self.x,self.y+1)
        mapHolder.printScreen(mapHolder.map)
        self.tookTurn = True
    if(key.name == "left"):
        self.setPlayer(self.x,self.y-1)
        mapHolder.printScreen(mapHolder.map)
        self.tookTurn = True
    if(key.name == "up"):
        self.setPlayer(self.x-1,self.y)
        mapHolder.printScreen(mapHolder.map)
        self.tookTurn = True
    if(key.name == "down"):
        self.setPlayer(self.x+1,self.y)
        mapHolder.printScreen(mapHolder.map)
        self.tookTurn = True
    return



class Player(Tile):
    char = "U"
    x = 1
    y = 1
    tookTurn = False
    def __init__(self):
        super().__init__()
    def takeTurn(self):
        self.tookTurn = False
        hook = keyboard.on_press(lambda key: runTing(self, key))
        while(not self.tookTurn):
            sleep(0.5)
        keyboard.unhook(hook)
        return
    def setPlayer(self, x, y):
        newMap = create(mapHolder.name)
        tile = newMap.getRow(self.x).getTile(self.y)
        mapHolder.map.replaceTile(self.x,self.y,tile)
        mapHolder.map.replaceTile(x,y,self)
        self.x = x
        self.y = y
        return

