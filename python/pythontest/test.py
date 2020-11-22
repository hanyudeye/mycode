import os
import math
import random
import re
a="helo"
for x in [a,2,3,[3,{3,"3"},(3,78),4]]:
    print(x)

print(os.EX_CONFIG)
file=open("sky.py",'r')
print(file.read())
file.close()

month=['1月j','2yue','3yue']
month.append( '2y')
print(month)

month.reverse()

month[1]=1
print(month)
nums=[1,2,4,9]
print([ n+1 for n in nums])

d = {"a": 1, 'c': 3, 'b':2 }
print(d)
k=list(d.keys())
k.sort()
print(k)

for key in k:
    print(key,'=>',d[key])
s=sorted(d)
print(d)
