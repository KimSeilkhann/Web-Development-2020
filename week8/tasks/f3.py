n = input().split()
arr = list(map(int, n))

def xor(a, b):
    if(a or b):
        return 1
    if(a == b):
        return 0
print(xor(arr[0], arr[1]))