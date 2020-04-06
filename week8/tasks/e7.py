m = int(input())
n = input().split()

array = list(map(int, n))
arr = []

for i, j in enumerate(array):
    if(i < m):
        arr.append(j)
for i in reversed(arr):
    print(i, end = " ")