origin = str(input("Please tell me something in 10 characters:"))
if len(origin) < 10:
    print("string not long enough")
elif len(origin) > 10:
    print("string too long")
else:
    print("great bro")

first = origin[0]
last = origin[-1]
first_last = first + last 
print(first_last)

one = origin[0]
two = origin[0:1]
three = origin[0:2]
four = origin[0:3]
five = origin[0:4]
six = origin[0:5]
seven = origin[0:6]
eigth = origin[0:7]
nine = origin[0:8]
print(one)
print(two)
print(three)
print(four)
print(five)
print(six)
print(seven)
print(eigth)
print(nine)
print(origin)