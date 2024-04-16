from wall import Wall
from row  import Row
# Y 2 X
screen = []
LENX = 22
LENY = 22
for i in range(LENY):
    screen.append(Row(LENX))

def addBorders():
    for i in range(LENX):
        screen[0].setTile(Wall(), i)
        screen[LENY-1].setTile(Wall(), i)
    for i in range(LENY):
        screen[i].setTile(Wall(), 0)
        screen[LENY-i-1].setTile(Wall(), LENX-1)


def printScreen():
    for i in screen:
        line = ""
        for j in range(len(i)):
            line +=i.getTile(j).getChar() + " "
        print(line)

addBorders()
printScreen()

# ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ 
# ▧ U   D
# ▧ W W W  
# ▧
# ▧
# ▧
# ▧
# ▧
# ▧
# ▧
# ▧
# ▧
# ▧
# ▧
# ▧
# ▧
# ▧
# ▧
# ▧
# ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ ▧ 

