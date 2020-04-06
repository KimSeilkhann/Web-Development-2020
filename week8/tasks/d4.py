n = int(input())
x = 1
while x<=n:
    if(x==n):
        print('YES')
        break
    x = x * 2
if x!=n:
    print('NO')