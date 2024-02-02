playerHas = []
playerData = []


def addToInventory(obj):
    playerHas.append(obj)


def isInPlayerData(strg):
    try:
        playerData.index(strg)
        return True
    except ValueError:
        return False


def addToPlayerData(strg):
    playerData.append(strg)


MainRoomData = {
    "@INT": {
        "couch": {
            "@RESP": [
                {
                    "@SUCCESS": "You found some coins!",
                    "@FAILED": "You didn't find anything",
                    "@RUN": (
                        lambda: addToInventory("Some Coins"),
                        addToPlayerData("searchedCouch"),
                    ),
                    "@CHECK": lambda: isInPlayerData("searchedCouch"),
                }
            ],
            "@ACT": ["Search the couch."],
        },
        "tv": {
            "@RESP": [
                {"@SAY": "You pushed the button but nothing happens", "@RUN": None}
            ],
            "@ACT": ["Turn on the tv."],
        },
    },
    "@MOVE": ["Playroom", "Hallway", "Outside"],
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
                    currentRoom = eval(x + "Data")
                    print("Moving")
                    moved = True
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
                                if currentRoom["@INT"][x]["@RESP"][y]["@CHECK"]():
                                    currentRoom["@INT"][x]["@RESP"][y]["@RUN"]()
                                    print(
                                        currentRoom["@INT"][x]["@RESP"][y]["@SUCCESS"]
                                    )
                                else:
                                    print(currentRoom["@INT"][x]["@RESP"][y]["@FAILED"])
                                break
                        if not interacted:
                            print("That is not a valid input, please try again.")
                else:
                    #fix
                    print("Object was not found.")


rootOperation()
