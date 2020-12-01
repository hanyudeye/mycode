import re

# 起始匹配
m = re.match("fuc", "fuck at you")
# if m is not None:
print(m.group())

#找出一个 
n= re.search(".ok","foga ook afs jok")
print(n.group())

# 截断
split=re.split("\W+","foga ,ook, afs, jok")
for i in split:
    print(i)


findall=re.findall("ok","foga ,ook, afs, jok")
for i in findall:
    print(i)

