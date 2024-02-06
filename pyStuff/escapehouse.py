import sys

playerHas = []
playerData = []


def addToInventory(obj):
    playerHas.append(obj)


def isInPlayerData(strg):
    if strg is None or strg == "":
        return False
    try:
        playerData.index(strg)
        return True
    except ValueError:
        return False


def addToPlayerData(strg):
    playerData.append(strg)


def removeFromIventory(obj):
    playerHas.remove(obj)


def rMet(arg):
    main = True
    for x in arg:
        s = x.split("-")
        match s[0].upper():
            case "IN":
                if currentRoom["@NAME"] == s[1]:
                    main = main and True
                else:
                    main = main and False
            case "HAS":
                try:
                    playerHas.index(s[1])
                    main = main and True
                except ValueError:
                    main = main and False
            case "DATA":
                try:
                    playerData.index(s[1])
                    main = main and True
                except ValueError:
                    main = main and False
    return main


def setRoom(arrName):
    global currentRoom
    currentRoom = eval(arrName + "Data")


objectData = {
    "coins": {"@NAME": "Coins", "@DESC": "Some coins.", "@HASUSE": False},
    "cheese": {
        "@NAME": "Cheese",
        "@DESC": "Cheddar, yummy!",
        "@HASUSE": True,
        "@USE": "RM-cheese",
        "@SUCCESS": "Tasty!",
    },
    "bkey": {
        "@NAME": "BKEY",
        "@DESC": "A key to the bathroom",
        "@HASUSE": False,
    },
    "ekey": {
        "@NAME": "EKEY",
        "@DESC": "A key to the door",
        "@HASUSE": False,
    },
    "dkey": {
        "@NAME": "DKEY",
        "@DESC": "A key to the drawer",
        "@HASUSE": False,
    },
    "crowbar": {
        "@NAME": "Crowbar",
        "@DESC": "A crowbar. Nothing more, nothing less.",
        "@HASUSE": False,
    },
}


MainRoomData = {
    "@NAME": "MainRoom",
    "@INT": {
        "couch": {
            "@NAME": "Couch",
            "@RESP": [
                {
                    "@SUCCESS": "You found some coins!",
                    "@FAILED": "You didn't find anything",
                    "@RUN": lambda: addToInventory("coins"),
                    "@CHECK": "DATA-searchedCouch",
                }
            ],
            "@ACT": ["Search the couch."],
        },
        "tv": {
            "@NAME": "TV",
            "@RESP": [
                {
                    "@SUCCESS": "You pushed the button but nothing happens",
                    "@RUN": None,
                    "@FAILED": "",
                    "@CHECK": "-",
                },
                {
                    "@SUCCESS": "You fittle with the cables.",
                    "@RUN": None,
                    "@FAILED": "",
                    "@CHECK": "-",
                },
                {
                    "@SUCCESS": "A crowbar? Maybe thats why the tv is not working.",
                    "@RUN": None,
                    "@FAILED": "Nothing here.",
                    "@CHECK": "HAS-crowbar",
                },
            ],
            "@ACT": ["Turn on the tv.", "Check cables.", "Look behind TV stand."],
        },
        "drawer": {
            "@NAME": "Drawer",
            "@RESP": [
                {
                    "@SUCCESS": "You open the draw and there is a key inside that says bathroom",
                    "@RUN": None,
                    "@FAILED": "It is empty.",
                    "@CHECK": "HAS-BKey",
                },
                {
                    "@SUCCESS": "You find a key that says 'exit'.",
                    "@RUN": None,
                    "@FAILED": "It is empty.",
                    "@CHECK": "HAS-EKey",
                },
            ],
            "@ACT": ["Open the drawer.", "Look on top."],
        },
    },
    "@MOVE": {
        "hallway": {
            "@NAME": "Hallway",
            "@REQ": [],
            "@REF": "Hallway",
        },
        "outside": {
            "@NAME": "Outside",
            "@REQ": ["HAS-EKey", "HAS-crowbar"],
            "@REF": "outside",
        },
    },
    "@ENDGAME": False,
}
HallwayData = {
    "@NAME": "Hallway",
    "@INT": {
        "nothing": {
            "@NAME": "Nothing",
            "@RESP": [
                {
                    "@SUCCESS": "You did nothing",
                    "@RUN": None,
                    "@FAILED": "You did nothing",
                    "@CHECK": "-",
                },
                {
                    "@SUCCESS": "You need the key",
                    "@RUN": None,
                    "@FAILED": "You open the drawer to find nothing. Maybe it is somewhere else.",
                    "@CHECK": "HAS-DKey",
                },
            ],
            "@ACT": ["Do nothing", "Open drawer (NEED DKey)"],
        },
        "drawer": {
            "@NAME": "Drawer",
            "@RESP": [
                {
                    "@SUCCESS": "You need the key",
                    "@RUN": None,
                    "@FAILED": "You open the drawer to find nothing. Maybe it is somewhere else.",
                    "@CHECK": "HAS-DKey",
                }
            ],
            "@ACT": ["Open drawer (NEED DKey)"],
        },
    },
    "@MOVE": {
        "mainroom": {
            "@NAME": "MainRoom",
            "@REQ": [],
            "@REF": "MainRoom",
        },
        "kitchen": {
            "@NAME": "Kitchen",
            "@REQ": [],
            "@REF": "Kitchen",
        },
        "bathroom": {
            "@NAME": "Bathroom",
            "@REQ": ["HAS-BKey"],
            "@REF": "Bathroom",
        },
    },
    "@ENDGAME": False,
}
BathroomData = {
    "@NAME": "Bathroom",
    "@INT": {
        "wash": {
            "@NAME": "Wash",
            "@RESP": [
                {
                    "@SUCCESS": "You wash your hands.",
                    "@RUN": None,
                    "@FAILED": "You wash your hands.",
                    "@CHECK": "-",
                },
            ],
            "@ACT": ["Wash your hands."],
        },
    },
    "@MOVE": {
        "hallway": {
            "@NAME": "Hallway",
            "@REQ": [],
            "@REF": "Hallway",
        },
    },
    "@ENDGAME": False,
}
KitchenData = {
    "@NAME": "Kitchen",
    "@INT": {
        "fridge": {
            "@NAME": "Fridge",
            "@RESP": [
                {
                    "@SUCCESS": "Found some cheese",
                    "@RUN": None,
                    "@FAILED": "The fridge is empty",
                    "@CHECK": "HAS-cheese",
                },
            ],
            "@ACT": ["Do nothing"],
        },
        "cabnet": {
            "@NAME": "Cabnet",
            "@RESP": [
                {
                    "@SUCCESS": "Found some dust",
                    "@RUN": None,
                    "@FAILED": "Found some dust",
                    "@CHECK": "-",
                },
                {
                    "@SUCCESS": "Found a key",
                    "@RUN": None,
                    "@FAILED": "There is nothing here",
                    "@CHECK": "HAS-DKey",
                },
            ],
            "@ACT": ["Open cabnet A", "Open cabnet B"],
        },
    },
    "@MOVE": {
        "hallway": {
            "@NAME": "Hallway",
            "@REQ": [],
            "@REF": "Hallway",
        },
    },
    "@ENDGAME": False,
}

outsideData = {"@ENDGAME": True}

PlayroomData = {}
currentRoom = MainRoomData


def endGame():
    print(
        " You quicky weld the crowbar and you start to hack at the wooden boards attached to the door frame. \n You pry off the last one and you hear running behind you. \n Staying focused, you quickly insert the key and turn it to the right. \n The footsteps get louder and louder as you use all of your bodyweight to open the door. \n You are blinded by the lights, but you run forward anyways. \n You trip over some stairs, then something grabs you. \n You struggle to get up but you can't. Too Tired. \n What ever chased you said 'Thank you for assuming the party escort submission position.' \n You feel yourself being dragged into the house again. The lights go out."
    )
    sys.exit()


def rootOperation():
    global currentRoom
    while True:
        print(
            "What would you like to do? \nAvailable Commands: move, interact, list, use. Use HELP <command name> for "
            "information on it."
        )
        inp = input("> ").upper()
        if inp.find("HELP") != -1:
            pos = inp.find("HELP") + 5
            if inp.find("MOVE", pos) != -1:
                print(
                    "The move command allows you to move between rooms. You can get the room name from the list "
                    "command. Syntax: MOVE <ROOM NAME>"
                )
            elif inp.find("INTERACT", pos) != -1:
                print(
                    "The interact command allows you to interact with an object that is in the you are in. You can "
                    "get the objects in your room by using the list command. Syntax: INTERACT <OBJECT NAME>"
                )

            elif inp.find("LIST", pos) != -1:
                print(
                    "The list command tells you about everything you need to know about the room that you are in, "
                    "also lists your inventory. Syntax: LIST"
                )
            elif inp.find("USE", pos) != -1:
                print(
                    "The use command allows you to use an object in your inventory. Syntax: USE <OBJECT NAME>"
                )
            else:
                print(
                    "Use the help command to learn information about a command. Syntax: HELP <COMMAND>"
                )
        elif inp.find("MOVE") != -1:
            moved = False
            pos = inp.find("MOVE") + 5
            for x in currentRoom["@MOVE"]:
                if inp.find(x.upper(), pos) != -1:
                    if rMet(currentRoom["@MOVE"][x]["@REQ"]):
                        setRoom(currentRoom["@MOVE"][x]["@REF"])
                        if currentRoom["@ENDGAME"]:
                            endGame()
                        print("Moving")
                        moved = True
                        break
                    else:
                        print("You are missing something!")
            if not moved:
                print("Please try again")
        elif inp.find("INTERACT") != -1:
            interacted = False
            pos = inp.find("INTERACT") + 9
            for x in currentRoom["@INT"]:
                if inp.find(x.upper(), pos) != -1:
                    while not interacted:
                        print("What would you like to do?")
                        for y in range(len(currentRoom["@INT"][x]["@ACT"])):
                            print(str(y) + ". " + currentRoom["@INT"][x]["@ACT"][y])
                        inpu = input("> ")
                        for y in range(len(currentRoom["@INT"][x]["@ACT"])):
                            if inpu == str(y):
                                interacted = True
                                yes = False
                                d = True
                                s = currentRoom["@INT"][x]["@RESP"][y]["@CHECK"].split(
                                    "-"
                                )
                                match s[0].upper():
                                    case "DATA":
                                        try:
                                            playerData.index(s[1])
                                            yes = True
                                        except ValueError:
                                            pass
                                    case "HAS":
                                        d = False
                                        try:
                                            playerHas.index(s[1])
                                            yes = True
                                        except ValueError:
                                            pass
                                if not yes:
                                    currentRoom["@INT"][x]["@RESP"][y]["@RUN"]
                                    if d:
                                        addToPlayerData(s[1])
                                    else:
                                        addToInventory(s[1])
                                    print(
                                        currentRoom["@INT"][x]["@RESP"][y]["@SUCCESS"]
                                    )
                                else:
                                    print(currentRoom["@INT"][x]["@RESP"][y]["@FAILED"])
                                break
                        if not interacted:
                            print("That is not a valid input, please try again.")
                    break
            if not interacted:
                print("Object was not found.")
        elif inp.find("USE") != -1:
            pos = inp.find("USE") + 4
            used = False
            for x in playerHas:
                if inp.find(x.upper(), pos) != -1:
                    used = True
                    if objectData[x]["@HASUSE"]:
                        s = objectData[x]["@USE"].split("-")
                        match s[0].upper():
                            case "RM":
                                try:
                                    playerHas.remove(s[1])
                                    yes = True
                                except ValueError:
                                    pass

                        print(objectData[x]["@SUCCESS"])
                        break
                    else:
                        print("You can't do anything with this.")
                        break
            if not used:
                print("Object not found.")
        elif inp.find("LIST") != -1:
            print("You are in the " + currentRoom["@NAME"] + ".")
            print(
                "You can interact with " + str(len(currentRoom["@INT"])) + " object(s)."
            )
            for x in currentRoom["@INT"]:
                print(" - " + currentRoom["@INT"][x]["@NAME"])
            print("You can move to the following rooms:")
            for x in currentRoom["@MOVE"]:
                print(" - " + currentRoom["@MOVE"][x]["@NAME"])
            print("You have the following items in your inventory:")
            for x in playerHas:
                print(
                    " - "
                    + objectData[x.lower()]["@NAME"]
                    + " | "
                    + objectData[x.lower()]["@DESC"]
                )
            print("That is all.")


rootOperation()
