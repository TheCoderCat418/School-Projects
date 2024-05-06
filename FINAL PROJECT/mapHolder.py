import os

map = None
player = None

name = "MAP1"

def printScreen(screen):
    os.system("cls")
    for i in range(len(screen)):
        line = ""
        for j in range(len(screen.getRow(i))):
            playerColliding = False
            tile = screen.getRow(i).getTile(j)
            for j in tile.opdic.keys():
                if j == "reveal":
                    for a in player.inv:
                        a.split(";")
            line += tile.getChar() + " "
        print(line)
    return
