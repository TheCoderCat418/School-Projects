from player import Player
import mapHolder
def start():
    if gameStarted:
        while gameStarted:
            player.takeTurn()
gameStarted = False

player = Player()
player.x = 1
player.y = 1
player.setPlayer(1,1)
mapHolder.printScreen(mapHolder.map)
gameStarted = True
start()

