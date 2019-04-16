import math

array = [0,1,2,3,4]
second_array = []

# loop
for element in array:
    second_array.append(str(element * 2) * 2)
print('#1(loopy):', second_array)
# listcomp
second_array = [str(element * 2) * 2 for element in array]
print('#1(listcomp):', second_array)

second_array = []
# loop
for element in array:
    second_array.append(element * 10 + 7)
print('#2(loopy):', second_array)
# listcomp
second_array = [element * 10 + 7 for element in array]
print('#2(listcomp):', second_array)

array = [0, 12, 24]
second_array = []
# loop
for element in array:
    second_array.append(0)
    second_array.append(element // 10)
    second_array.append(element % 10)
print('#3(loopy):', second_array)
# listcomp
[second_array + [element // 10, element % 10, 0] for element in array]
print('#3(listcomp):', second_array)

def is_prime(num):
    '''
    checks to see if a num is prime using the square root of that #.
    '''
    if num % 2 == 0:
        return False
    for i in range(3, int(math.sqrt(num)) + 1, 2):
        if num % i == 0:
            return False
    return True

# loop
nums = []
for num in range(101):
    if not is_prime(num):
        nums.append(num)
print('#4(loopy):', nums)
# listcomp
# NOTE: need else if the if statement comes before the "for"
second_nums = [num for num in range(101) if not is_prime(num)]
print('#4(list_comp):', second_nums, second_nums == nums)

# loop
nums = []
for num in range(101):
    if is_prime(num):
        nums.append(num)
print('#5(loopy):', nums)
# listcomp
second_nums = [num for num in range(101) if is_prime(num)]
print('#5(list_comp):', second_nums, nums == second_nums)

# loop
def list_divisors(num):
    '''
    returns list of divisors.
    '''
    nums = []
    for i in range(1, int(math.sqrt(num)) + 1):
        if num % i == 0:
            nums.append(i)
    return nums + [num]
print('#6(loopy):', list_divisors(16))
# listcomp
def listcomp_divisors(num):
    '''
    returns list of divisors using listcomp.
    '''
    nums = []
    nums = [i for i in range(1, int(math.sqrt(num)) + 1) if num % i == 0]
    return nums + [num]
print('#6(listcomp):', listcomp_divisors(16), listcomp_divisors(16) == list_divisors(16))

matrix = [
    [1, 3 ,2],
    [3, 5, 7],
    ]
# loop
def transpose(matrix):
    transposed_matrix = []
    for index in range(len(matrix[0])):
        new_row = []
        for row in matrix:
            new_row.append(row[index])
        transposed_matrix.append(new_row)
    return transposed_matrix
print('#7(loopy):', transpose(matrix))
# list_comp
def transpose_listcomp(matrix):
    return [[row[index] for row in matrix] for index in range(len(matrix[0]))]
print('#7(listcomp):', transpose_listcomp(matrix))
