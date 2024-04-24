import mapHolder
from time import sleep
from tile import Tile
from createMap import create
import keyboard

def runTing(self, key: keyboard.KeyboardEvent):
    if(self.tookTurn):
        return
    if(key.name == "right"):
        self.tookTurn = True
        self.setPlayer(1,1)
    return



class Player(Tile):
    char = "U"
    x = 0
    y = 0
    tookTurn = False
    takingTurn = False
    def takeTurn(self):
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
