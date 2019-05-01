def repeat(string):
    def times(num):
        return string * num
    return times

# def outer():
#     x = 'foo'
#     def inner():
#         x = 'bar'
#     inner()
#     return x

def outer():
    x = 'foo'
    def inner():
        nonlocal x # returns bar as the x s feed
        x = 'bar'
    inner()
    return x

def make_counter(accessor_enabled=False):
    counter = 0
    def inc():
        nonlocal counter
        counter += 1
        return counter

    def accessor():
        return counter

    def decide(access=False):
        if access:
            return accessor()
        else:
            return inc()

    if accessor_enabled:
        return decide
    return inc

ctr1 = make_counter()
ctr2 = make_counter()
ctr3 = make_counter(True)
for i in range(20):
    print('ctr1', ctr1())
    print('ctr2', ctr2())
    print('ctr2', ctr3())
print('final val of ctr3():', ctr3(True))
