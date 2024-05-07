import os

from hidden import Hidden
from tile import Tile

map = None
player = None

name = "MAP1"

def printScreen(screen):
    os.system("cls")
    for i in range(len(screen)):
        line = ""
        for j in range(len(screen.getRow(i))):
            tile = screen.getRow(i).getTile(j)
            for x in tile.opdic.keys():
                if x == "reveal":
                    tile = Hidden(dict())
                    for a in player.inv:
                        if a.split(";")[0] == "KEY":
                            if tile.opdic[x] == a.split(";")[0]:
                                tile = screen.getRow(i).getTile(j)
            line += tile.getChar() + " "
        print(line)
    return
