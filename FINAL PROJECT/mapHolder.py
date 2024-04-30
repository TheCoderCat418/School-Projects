import os

map = None
player = None

name = "MAP1"


def printScreen(screen):
    os.system("cls")
    for i in range(len(screen)):
        line = ""
        for j in range(len(screen.getRow(i))):
            line += screen.getRow(i).getTile(j).getChar() + " "
        print(line)
    return
