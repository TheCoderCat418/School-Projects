mainRoomData = {"@Obj": ["couch", "tv", "remote", "coffee table"], "@Act": ["Search the couch.", "Go to tv"], "@MOVE": ["Playroom", "Hallway", "Outside"]}
playerHas = []
currentRoom = mainRoomData


def rootOperation():
    while True:
        print("What would you like to do? \nAvailable Commands: move, interact, list, use. Use HELP <command name> for information on it.")
        inp = input("> ").upper()
        if inp.find("HELP") != -1:
            pos = inp.find("HELP") + 5
            if inp.find("MOVE", pos) != -1:
                print("The move command allows you to move between rooms. You can get the room name from the list command. Syntax: MOVE <ROOM NAME>")
            elif inp.find("INTERACT", pos) != -1:
                print("The interact command allows you to interact with an object that is in the you are in. You can get the objects in your room by using the list command. Syntax: INTERACT <OBJECT NAME>")
            elif inp.find("LIST", pos) != -1:
                print("The list command tells you about everything you need to know about the room that you are in, also lists your inventory. Syntax: LIST")
            elif inp.find("USE", pos) != -1:
                print("The use command allows you to use an object in your inventory. Syntax: USE <OBJECT NAME>")
            else:
                print("Use the help command to learn information about a command. Syntax: HELP <COMMAND>")
        elif inp.find("MOVE") != -1:
            moved = False
            pos = inp.find("MOVE") + 5
            #for x in currentRoom["@MOVE"]:
            #    print(x)
            for x in currentRoom["@MOVE"]:
                if inp.find(x.upper(), pos) != -1:
                    print("Moving")
                    moved = True
            if not moved:
                print("Please try again")






rootOperation()