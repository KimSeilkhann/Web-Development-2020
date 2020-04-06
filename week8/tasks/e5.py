m = int(input())
n = input().split()
result = list(map(int, n))

ans = "NO"

for i, j in enumerate(result):
    if(i >= m):
        break
    if(i == 0):
        continue
    if(result[i] >= 0 and result[i - 1] >= 0):
        ans= "YES"
    if(result[i] < 0 and result[i - 1] < 0):
        ans = "YES"

print(ans)