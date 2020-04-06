n = input().split()
arr = list(map(float, n))

def poww(a, n):
    return a ** n

print(poww(arr[0], arr[1]))