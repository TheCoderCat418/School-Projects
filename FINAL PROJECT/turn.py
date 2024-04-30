from player import Player
import mapHolder
def start():
    if gameStarted:
        while gameStarted:
            mapHolder.player.takeTurn()
gameStarted = False




