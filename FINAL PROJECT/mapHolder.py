import os
import pathlib
from floor import Floor
from hidden import Hidden
import createMap
import sys
import turn
from player import Player
map = None
player = None
id = 1
endGame = False
def printScreen(screen):
    global player, map, id, endGame
    os.system("cls")
    for i in range(len(screen)):
        line = ""
        for j in range(len(screen.getRow(i))):
            tile = screen.getRow(i).getTile(j)
            for x in tile.opdic.keys():
                if x == "reveal":
                    hidden = True
                    for a in player.inv:
                        if a.split(";")[0] == "key":
                            if tile.opdic[x] == a.split(";")[1]:
                                hidden = False
                    if hidden:
                        tile = Hidden(tile.opdic)
                if x == "destroy":
                    for a in player.inv:
                        if a.split(";")[0] == "key":
                            if tile.opdic[x] == a.split(";")[1]:
                                tile = Floor(tile.opdic)
            line += tile.getChar() + " "
        print(line)
    return

def loadNextMap():
    global player, map, id, endGame
    os.system("cls")
    if (pathlib.Path(sys.argv[0]).parent.absolute() / f"MAP{str(id+1)}.csv").exists():
        print("Loading next map")
        map = createMap.create(f"MAP{str(id+1)}")
        player = Player().spawnPlayer(map)
        player.inv = []
        id=id+1
        printScreen(map)
        turn.gameStarted = True
        return
    endGame = True
    print("Thanks for playing!")   
    sys.exit(0)