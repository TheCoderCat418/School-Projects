import importlib
def start():
    if gameStarted:
        mapHolder = importlib.import_module("mapHolder")
        while gameStarted:
            mapHolder.player.takeTurn()
gameStarted = False


