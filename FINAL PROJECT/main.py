from createMap import create
import mapHolder
from player import Player
import turn
mapHolder.map = create("MAP1")
mapHolder.printScreen(mapHolder.map)
mapHolder.player = Player()
mapHolder.player.x = 1
mapHolder.player.y = 1
mapHolder.player.setPlayer(1,1)
mapHolder.printScreen(mapHolder.map)
turn.gameStarted = True
turn.start()