gameOver = False
toletClogged = False
room = "lobby"
def securityRoom():
    inSecurity = True
    print("You have entered the security room.  There is a guard watching monitors and he has a keycard and a walkie talkie.")
    print("You also notice a button that seems to control the cameras.")
    while inSecurity == True:
        print("1. Create a distraction by telling the guard there's a fight in the lobby. ")
        print("2. Talk to the guard to see if you can gain info.")
        print("3. Rush guard and try to subdue him?")
        print("4. Ask the guard out on a date?")


def Bathroom():
    global toletClogged, room
    room = "bath"
    while room == "bath":
    print("In bathroom. What would you like to do?")
    print("1. Go to the stall")
    print("2. Go to the sink")
    print("3. Leave the bathroom")
    match input("> "):
        case "1":
            print("Do you want to go to the bathroom(1) or clog toilet as a distraction(2)")
            match input("> "):
                case "1":
                    print("You feel much better now.")
                case "2":
                    print("You clogged it and told someone.")
                    toletClogged = True
        case "2":
            if input("As you wash your hands, u see a paper. Pick it up?????? (Y/N)").upper() == "Y":
                print("The paper reads 123. That is all. It could be helpful.q")
        case "3":
            room = "lobby"







def mainLobby():
    print("You need a million dollars to save your son.  You decide to rob the local bank.  You have 1 hour to steal the money.")
    while gameOver == False:

        print("You have entered the lobby. Where would you like to go?")
        print("1. Security room")
        print("2. Bathroom")
        print("3. Maintenance Closet")
        print("4. Vault")
        choice = input("")
        if choice == "1":
            securityRoom()

mainLobby()