from random import randint

class Player:
    def __init__(self, commmunication: int, reactionTime: int,
                 speed: int, strength: int, agility: int, mood:int):
        self.communication = commmunication
        self.reactionTime = reactionTime
        self.speed = speed
        self.strength = strength
        self.agility = agility
        self.mood = mood
    
    def getMood(self) -> int:
        return self.mood
    
    def getCommunication(self) -> int:
        return self.communication
    
    def getReactionTime(self) -> int:
        return self.reactionTime
    
    def getSpeed(self) -> int:
        return self.speed
    
    def getAgility(self) -> int:
        return self.agility
    
    def getStrength(self) -> int:
        return self.strength
    
def makeRandomPlayer() -> Player:
    return Player(randint(1,100), randint(1,100), randint(1,100), randint(1,100), randint(1,100), randint(1,100))