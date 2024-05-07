from createMap import create
import mapHolder
from player import Player
import turn
mapHolder.map = create("MAP1")
mapHolder.player = Player().spawnPlayer(mapHolder.map)
mapHolder.printScreen(mapHolder.map)
turn.gameStarted = True
turn.start()