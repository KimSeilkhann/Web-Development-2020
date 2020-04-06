n = input().split()
array = list(map(int, n))

def minn(a, b, c, d):
    return min(a, b, c, d)

ans = minn(array[0], array[1], array[2], array[3])
print(ans)