from createMap import create
from os import system
import keyboard
import mapHolder
from player import Player
def printScreen(screen):
    system('cls')
    for i in range(len(screen)):
        line = ""
        for j in range(len(screen.getRow(i))):
            line +=screen.getRow(i).getTile(j).getChar() + " "
        print(line)
mapHolder.map = create("MAP1")
printScreen(mapHolder.map)
player = Player()
mapHolder.map.replaceTile(1,1,player)
printScreen(mapHolder.map)
player.takeTurn()