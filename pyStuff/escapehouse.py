playerHas = []
playerData = []

objectData = {"coins": {"@NAME": "Coins", "@DESC": "Some coins.", "@HASUSE": False}}


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
                    playerHas.index(s[0])
                    main = main and True
                except ValueError:
                    main = main and False
            case "DATA":
                try:
                    playerData.index(s[0])
                    main = main and True
                except ValueError:
                    main = main and False
    return main


def setRoom(arrName):
    global currentRoom
    currentRoom = eval(arrName + "Data")


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
                    "@CHECK": "searchedCouch",
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
                    "@CHECK": None,
                },
                {
                    "@SUCCESS": "You fittle with the cables.",
                    "@RUN": None,
                    "@FAILED": "",
                    "@CHECK": None,
                },
            ],
            "@ACT": ["Turn on the tv.", "Check cables."],
        },
    },
    "@MOVE": {
        "playroom": {
            "@NAME": "Playroom",
            "@REQ": [],
            "@REF": "playroom",
        },
        "hallway": {
            "@NAME": "Hallway",
            "@REQ": [],
            "@REF": "Hallway",
        },
        "outside": {
            "@NAME": "Outside",
            "@REQ": ["HAS-key"],
            "@REF": "outside",
        },
    },
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
                    "@FAILED": "",
                    "@CHECK": None,
                },
            ],
            "@ACT": ["Do nothing"],
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
        "outside": {
            "@NAME": "Bathroom",
            "@REQ": ["HAS-key"],
            "@REF": "Bathroom",
        },
    },
}

PlayroomData = {}
currentRoom = MainRoomData


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
                        print("Moving")
                        moved = True
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
                                if not isInPlayerData(
                                    currentRoom["@INT"][x]["@RESP"][y]["@CHECK"]
                                ):
                                    currentRoom["@INT"][x]["@RESP"][y]["@RUN"]
                                    addToPlayerData(
                                        currentRoom["@INT"][x]["@RESP"][y]["@CHECK"]
                                    )
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
                        objectData[x]["@USE"]
                        print(objectData[x]["@SUCCESS"])
                        break
                    else:
                        print("You can't do anything with this.")
                        break
            if not used:
                print("Object not found.")
        elif inp.find("LIST") != -1:
            print("You are in the " + currentRoom["@NAME"] + ".")
            print("There are " + str(len(currentRoom["@INT"])) + " objects.")
            for x in currentRoom["@INT"]:
                print(" - " + currentRoom["@INT"][x]["@NAME"])
            print("You can move to the following rooms:")
            for x in currentRoom["@MOVE"]:
                print(" - " + x)
            print("You have the following items in your inventory:")
            for x in playerHas:
                print(" - " + objectData[x]["@NAME"])
            print("That is all.")


rootOperation()
