from tile import Tile
import importlib
import turn
class Exit(Tile):
    char = "⌦"
    def onCollide(self):
        mapHolder = importlib.import_module("mapHolder")
        mapHolder.loadNextMap()  
    def attemptedCollide(self):
        pass
    def beforeCollide(self):
        turn.gameStarted = False