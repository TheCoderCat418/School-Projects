from random import randint
import statistics



boxes = []
for i in range(5000):
    allPrizes = False
    prizesRecived = []
    prizes = [0,0,0,0,0,0]
    boxCount = 0
    while not allPrizes:
        p = randint(1,6)
        boxCount+=1
        prizes[p-1] = 1
        prizesRecived.append(p)
        if 0 not in prizes:
            allPrizes = True
    boxes.append(boxCount)
print(statistics.mean(boxes))