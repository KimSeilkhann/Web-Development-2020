
m = int(input())
n = input().split()
result = list(map(int, n))
cnt = 0
for i, j in enumerate(result):
    if(i >= m):
        break
    if(j > 0):
        cnt += 1

print(cnt)