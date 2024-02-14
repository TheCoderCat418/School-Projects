from random import randint

done = 0
tails = 0
times = 30
while times != 0:
    f1 = randint(1, 6)
    f2 = randint(1, 6)
    f3 = randint(1, 6)
    if f1 + f2 == 7 :
        done+=1
    times-=1
print(done)
print((done/30)*100)
print("---")
totalCounts = []
num2 = 0
while num2 != 10:
   num = 0
   count = 0
   while num != 12:
       count+=1
       f1 = randint(1, 6)
       f2 = randint(1, 6)
       num = f1 + f2
   totalCounts.append(count)
   num2+=1
for i in totalCounts:
    print(i)