'''
Raunak Chowdhury
SoftDev2 Pd8
K #23: Closure
2019-05-01
'''

def memoized_fib(f):
    # print(f)
    # return 1
    memo = []
    def helper(x):
        nonlocal memo
        if len(memo) == 0:
            memo.append(0)
            memo.append(1)
        # just pull it out of the list if it exists already
        if x < len(memo):
            return memo[x]
        # if not, add successively to get to that point and return
        while x + 1 > len(memo):
            memo.append(memo[-1] + memo[-2])
        # print(x, len(memo), memo)
        return memo[x]
    return helper #the fib param is what gets passed into helper!


@memoized_fib
def fib(num):
    # print('num',num)
    if num == 0:
        return 0
    elif num == 1:
        return 1
    else:
        return fib(num-1) + fib(num-2)

print(fib(5))
