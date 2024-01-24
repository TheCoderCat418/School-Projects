gameOver = False

def sceurityRoom():
    while True:
        break

def mainLobby():
    while not gameOver:
        print(
            "You need a million dollars to save your son. You decided to rob the local bank. You have one hour to steal"
            "the money. Where would you like to go? (Bathroom, Security, Vault, Maintenance, Leave")
        responce = input(">")

mainLobby()