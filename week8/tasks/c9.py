cnt = 0
n = int(input())
for i in range(1, n+1):
    x = int(input())
    if x == 0:
        cnt = cnt + 1
print(cnt)