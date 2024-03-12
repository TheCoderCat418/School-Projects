from random import randint

class Player:
    def __init__(self, dribbling, passing, shooting):
        self.dribbling = dribbling
        self.passing = passing
        self.shooting = shooting
myTeam = []
oppTeam = []
def createTeam():
    global myTeam
    for _ in range(5):
        myTeam.append(Player(randint(1, 10), randint(1, 10), randint(1, 10)))
def createOppTeam():
    global oppTeam
    for _ in range(5):
        oppTeam.append(Player(randint(1, 10), randint(1, 10), randint(1, 10)))

def printStats():
    for i in range(len(myTeam)):
        print("Player "+ str(i+1))
        print(myTeam[i].dribbling)
        print(myTeam[i].passing)
        print(myTeam[i].shooting)

def printOppStats():
    for i in range(len(oppTeam)):
        print("OppPlayer "+ str(i+1))
        print(oppTeam[i].dribbling)
        print(oppTeam[i].passing)
        print(oppTeam[i].shooting)

def teamRating():
    teamTotal = 0
    oppTeamTotal = 0
    for i in myTeam:
        teamTotal += i.dribbling
        teamTotal += i.passing
        teamTotal += i.shooting
    print(teamTotal)

    for i in oppTeam:
        oppTeamTotal += i.dribbling
        oppTeamTotal += i.passing
        oppTeamTotal += i.shooting
    print(oppTeamTotal)
    return teamTotal, oppTeamTotal
    
def checkWinner():
    tt, ott = teamRating()
    if(tt>ott):
        print("You Won")
    else:
        print("You Lost")



createTeam()
createOppTeam()
printStats()
teamRating()
checkWinner()