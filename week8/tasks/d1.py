import math

n = int(input())
x = 1
while x*x<=n:
    if x == math.sqrt(x*x):
        print(x*x)
    x = x+1
