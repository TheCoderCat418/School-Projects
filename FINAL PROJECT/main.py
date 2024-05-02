from createMap import create
import mapHolder
from player import Player
import turn
mapHolder.map = create("MAP1")
mapHolder.printScreen(mapHolder.map)
mapHolder.player = Player().spawnPlayer()
mapHolder.printScreen(mapHolder.map)
turn.gameStarted = True
turn.start()