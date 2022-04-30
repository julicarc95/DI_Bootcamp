#Exercise 1
my_fav_numbers = {1,3,4,7,8,9,11,13,20,23,26}
my_fav_numbers.add(29)
my_fav_numbers.add(31)
my_fav_numbers.remove(31)

friend_fav_numbers = {7,9,4}

our_fav_numbers= set.union(friend_fav_numbers,my_fav_numbers)

#Exercise 3
numbers = range(1,21)
for number in numbers:
    print(number)

#Exercise 4
list = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
print(list)

#Exercise 5
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.pop(0)
basket.pop(-1)
basket.append("kiwi")
basket.insert(0,"Apples")
basket.count("Apples")
basket.clear()
print(basket)

#Exercise 6
#name=""
#while name != "Julian":
#    name = input("whats your name?")

#Exercise 7
lista = [1,2,3,4,5,6,7,8,9,10]
for num in lista:
    if num % 2 == 0:
        print(num)

#Exercise 8
numeros = range(1500,2501)
for numero in numeros:
    if numero % 5 == 0 or numero % 7 == 0:
        print(numero)

#Exercise 9
frutas = []
fav_fruta = str(input("Cuales son tu frutas favoritas? Usa un espacio en el medio"))
frutas.append(fav_fruta)
frut = str(input("Decime una fruta"))
for frut in frutas:
    if frut == frutas.index(frut):
        print("Elegiste una de tus frutas favoritas, disfruta")
    else:
        print("Esa no es tu fruta favorita")
 
 