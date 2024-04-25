from createMap import create
import mapHolder
from player import Player

mapHolder.map = create("MAP1")
mapHolder.printScreen(mapHolder.map)
player = Player()
player.x = 1
player.y = 1
player.setPlayer(1,1)
mapHolder.printScreen(mapHolder.map)
while(True):
    player.takeTurn()