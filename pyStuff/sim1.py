import random


matches = 0
times = 50000
for d in range(50000):
    print(times)
    times-=1
    classroom = []
    for i in range(30):
        classroom.append(random.randint(1, 365))
    classroom.sort()
    mathc = False
    for i in range(len(classroom)-1):
        if classroom[i] == classroom[i+1]:
            mathc = True
            break
    if mathc:
        #print("Match")
        matches+=1

print(matches)