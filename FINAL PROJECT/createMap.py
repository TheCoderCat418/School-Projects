import io
import pathlib
from chest import Chest
from exit import Exit
from floor import Floor

from key import Key
from door import Door
from grid import Grid
from row import Row
from tile import Tile
from wall import Wall
import sys
from start import Start





# OPERATORS: is, reveal, open (Door only)
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
            # OPERATOR CHECK

            opDic = dict()
            spl = stri.split(":")
            obj = spl[0]
            firstPass = True
            for i in spl:
                if firstPass:
                    firstPass = False
                    continue
                if(i.find(";") != -1):
                    pair = i.split(";",1)
                    opDic.update({pair[0]: pair[1]})
                    pass
                

            match obj:
                case "BORDER":
                    row.setTile(Wall(opDic), v)
                case "START":
                    row.setTile(Start(opDic), v)
                case "WALL":
                    row.setTile(Wall(opDic), v)
                case "DOOR":
                    row.setTile(Door(opDic), v)
                case "FLOOR":
                    row.setTile(Floor(opDic), v)
                case "KEY":
                    row.setTile(Key(opDic), v)
                case "CHEST":
                    row.setTile(Chest(opDic), v)
                case "END":
                    row.setTile(Exit(opDic), v)
                case _:
                    row.setTile(Tile(opDic), v)
    return screen