import io
import pathlib
import mapHolder
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
        screen.appendRow(Row(len(lines[0].split(","))))
    for i in range(len(lines)):
        row = screen.getRow(i)
        arr = lines[i].split(",")
        for v in range(len(arr)):
            stri = arr[v]
            if arr[v].endswith("\n"):
                stri = arr[v].split("\n")[0]
            if stri == "BORDER":
                row.setTile(Wall(), v)
            elif stri == "START":
                row.setTile(Start(), v)
            elif stri == "WALL":
                row.setTile(Wall(), v)
            elif stri == "DOOR":
                row.setTile(Door(), v)
    return screen