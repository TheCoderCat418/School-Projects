from random import randint
import math

class Car:
  def __init__(self, type, speed, handling,raceTime,bank):
      self.type = type
      self.speed = speed
      self.handling = handling
      self.raceTime = raceTime
      self.bank = bank
  def getType(self):
      return self.speed
carTypes = ["ferrari", "porsche", "bmw", "mustang", "corvette", "supra"]

def setupMyCar():
    global myCar
    rnum = randint(0, len(carTypes)-1)
    myCar = Car(carTypes[rnum], randint(100,220), randint(10,30), 0, 10000)
    carTypes.pop(rnum)
    print("MY CAR")
    print(myCar.type)
    print("Speed:" + str(myCar.speed))
    print("Handling:" + str(myCar.handling))
    print("******************")

def setupOpp():
    global oppCar
    oppCar = Car(carTypes[randint(0,4)], randint(100,220), randint(10,30), 0,0)
    print("Opponent CAR")
    print(oppCar.type)
    print("Speed:" + str(oppCar.speed))
    print("Handling:" + str(oppCar.handling))
    print("******************")

def race():
    myCar.raceTime = 0
    for i in range(1,5):
        myLapTime = round(randint(2,5)*math.sqrt(myCar.speed) + randint(2,5)*math.sqrt(myCar.handling))
        print("lap " + str(i)+ ": " + str(myLapTime))
        myCar.raceTime +=myLapTime
    print(myCar.raceTime)
    for i in range(1,5):
        oppLapTime = round(randint(2,5)*math.sqrt(oppCar.speed) + randint(2,5)*math.sqrt(oppCar.handling))
        print("lap " + str(i)+ ": " + str(oppLapTime))
        oppCar.raceTime +=oppLapTime
    print(oppCar.raceTime)
def checkWinner():
    if myCar.raceTime<oppCar.raceTime:
        print("UWIN")
        myCar.bank += 10000
    else:
        print("LLLLLL")

def shop():
    ask = input("What would you like to buy? 1tires, 2 breaks, 3 turbo")
    if ask == "1":
        myCar.handling -= 5
    elif (ask == "2"):
        myCar.handling -= 2
    elif(ask == "3"):
        myCar.speed -= 10





def main():
    setupMyCar()
    keepRacing = True
    while keepRacing:
        ask = input("What would you like to do Race1, Shop2, End Season3")
        if ask == "1":
            setupOpp()
            race()
            checkWinner()
        elif (ask == "2"):
            shop()
        elif(ask == "3"):
            keepRacing = False
            print("You made " + str(myCar.bank))


        


main()