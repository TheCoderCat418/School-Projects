def arry1():
    a1 = input("What system does the school use to monitor the computers?")
    if a1.lower() == "vision":
        print("Nice!")
    else:
        print("Oops, Lets move on")
    a2 = input("Does Mr. Franco teach AP CompSci? (Y/n)")
    if a2.lower() == "y":
        print("Good Work!")
    else:
        print("Uh oh!")


arry1()
