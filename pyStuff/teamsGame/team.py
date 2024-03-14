from player import Player
class Team:
    def __init__(self, players: list):
        if(len(players) == 12):
            self.team = players
            for i in range(len(players)):
                players[i].number = i
    