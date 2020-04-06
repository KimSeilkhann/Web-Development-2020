m = int(input())
n = input().split()
result = list(map(int, n))

cnt = 0
for i, j in enumerate(result):
    if(i > 0 and result[i] > result[i - 1] and i < m):
       cnt += 1

print(cnt)