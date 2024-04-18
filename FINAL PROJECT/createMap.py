import io
from door import Door
from row import Row
from wall import Wall
from start import Start
def create(mapName):
    thing = io.open("C:\\Users\\herman7593\\Downloads\\MAP1.csv", "r", -1, "ASCII", None, )
    lines = thing.readlines()
    
    screen = []
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