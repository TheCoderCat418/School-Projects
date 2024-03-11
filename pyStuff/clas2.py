from random import randint
import math
class Car:
  def __init__(self, type, speed, handling, time):
    self.type = type
    self.speed = speed
    self.handling = handling
    self.racetime = time

carTypes = ["car1", "car2", "car3"]
def setupMyCar():
        global myCar
        myCar = Car(carTypes[randint(0, len(carTypes)-1)], randint(20, 50),  randint(10, 30), 0)

def setupOPCar():
        global opp
        opp = Car(carTypes[randint(0, len(carTypes)-1)], randint(20, 50),  randint(10, 30), 0)

setupMyCar()
setupOPCar() 

def race():
    myLapTime = randint(2,5)*math.sqrt(myCar.speed) 
print(1)