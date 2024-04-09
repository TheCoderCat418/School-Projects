screen = []
LENX = 22
LENY = 22
for i in range(LENX):
    screen.append([])

def fill(letter):
    for i in screen:
        for z in range(LENY):
            i.append(letter)

def addBorders():
    screen[0]
    for i in range(LENY):
        screen[i] = "▧"
        screen[len(screen)-1-i] = "▧"
    for i in screen:
        if i == 0 or i == len(screen)-1:
            continue
        i[0] = "▧"


def printStuff():

    for i in screen:
        line = ""
        for j in i:
            line += j + " "
        print(line)

fill()
while True:
    fill("a")
    printStuff()
    fill("b")
    printStuff()
    fill("c")
    printStuff()
    fill("d")
    printStuff()
    fill("e")
    printStuff()
    fill("f")
    printStuff()
    fill("g")
    printStuff()
    fill("h")
    printStuff()

#addBorders()
printStuff()

#print("""
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
# """)
