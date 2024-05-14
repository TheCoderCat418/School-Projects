import os

from floor import Floor
from hidden import Hidden
map = None
player = None
id = 1
name = "MAP1"

def printScreen(screen):
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
