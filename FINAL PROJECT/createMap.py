import io
import pathlib
from door import Door
from grid import Grid
from row import Row
from wall import Wall
import sys
from start import Start
def create(mapName):
    file : io.TextIOWrapper = io.open(pathlib.Path(sys.argv[0]).parent.absolute() / (mapName + ".csv"), "r", -1, "ASCII", None, None, '\n')
    lines : list = file.readlines()
    file.close()
    screen = Grid()
    for i in range(len(lines)):
        screen.append(Row(len(lines[0].split(","))))
    
    for i in range(len(lines)):
        arr = lines[i].split(",")
        for v in range(len(arr)):
            stri = arr[v]
            if arr[v].endswith("\n"):
                stri = arr[v].split("\n")[0]
            if stri == "BORDER":
                screen[i].setTile(Wall(), v)
            elif stri == "START":
                screen[i].setTile(Start(), v)
            elif stri == "WALL":
                screen[i].setTile(Wall(), v)
            elif stri == "DOOR":
                screen[i].setTile(Door(), v)
    return screen