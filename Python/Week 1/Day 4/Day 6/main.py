#Exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
dic = dict(zip(keys, values))
print(dic)

#Exercise 2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
ages = family.values()
print(ages)
price =[]
for age in ages:
    if age < 3: 
        precio = 0
        price.append(precio)
    elif age > 3 and age < 12:
        precio = 10
        price.append(precio)
    else:
        precio = 15
        price.append(precio)
print(price)
print(sum(price))

#Exercise 3
brand = {"name": "Zara", "creation_date" : 1975, "creator_name" : "Amancio Ortega Gaona", "type_of_clothes": "men, women, children, home", "international_competitors" : "Gap, H&M, Benetton", "number_stores" : 7000, "color France" : "blue", "Color Spain" : "red", "Color US": "pink, green" }
brand["number_stores"] = 2
brand["country_creation"] = "Spain"
key="international_competitors"
if key in brand.keys():
   brand["international_competitors"] = "Gap, H&M, Benetton, Desigual"
   break
del brand['creation_date']
USA = brand["Color US"]
print(USA)
print(len(brand)
print(brand.keys())
more_on_zara = {"creation_date": 1975, "numbers_stores" : 10000}
zara = dict(brand.items() + more_on_zara.items())

#Exercise 4
users = [ "Mickey", "Minnie", "Donald","Ariel","Pluto"]
