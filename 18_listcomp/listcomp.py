# Raunak Chowdhury
# Softdev2 pd8
# K#18: Getting Clever with List Comprehensions
# 2019-04-16

def pyth_triple(n):
    """find all triples up to n"""
    search_range = range(2,n)
    return [(x,y,z) for x in search_range for y in search_range for z in search_range if x**2 + y**2 == z**2 and y > x]

def partition(unpartitioned_list, index):
    """partition list"""
    pivot = unpartitioned_list[index]
    return [x for x in unpartitioned_list if x <= pivot] + [pivot] + [x for x in unpartitioned_list if x > pivot], index

def quick_sort(unsorted_list):
    """uses list comprehension quick_sort on the list"""
    if len(unsorted_list) < 2:
        return unsorted_list
    unsorted_list, index = partition(unsorted_list, int(len(unsorted_list)/2))
    return quick_sort(unsorted_list[0:index]) + quick_sort(unsorted_list[index+1:])


def test_cases(func):
    print(func([1,2], ['red', 'white']))
    print(func([1,2,3,5,7,2], [2,3,4,5]))
    print(func([-1,2,3], [-2,3,4]))
    print(func([1,2,3], [2,3,4]))
    print()

# union of sets A and B
def union(a, b):
    """Create a function that slaps two sets together."""
    return [x for x in a if x in a and not x in b] + [x for x in b if x in b and not x in a] + [x for x in a if x in a and x in b]

def intersection(a,b):
    """intersection of a and b"""
    return [x for x in a if x in a and x in b]

def difference(a, b):
    """all members of a not in b"""
    return [x for x in a if x in a and not x in b]

def symdifference(a, b):
    """all members a not in b and b not in a"""
    return [x for x in a if x in a and not x in b] + [x for x in b if x in b and not x in a]

def cartesian_product(a,b):
    """find all possible pairs of a and b"""
    return [(x,y) for x in a for y in b ]


def thicc_cartesian_product(a,b,c,d):
    """find all possible combos of a,b,c,d"""
    return [(w,x,y,z) for w in a for x in b for y in c for z in d]

if __name__ == '__main__':
    print(pyth_triple(30))
    print(quick_sort([3,7,5,2,5,7,8,9,102,20]))
    # print('Union:')
    # test_cases(union)
    # print('intersection:')
    # test_cases(intersection)
    # print('difference:')
    # test_cases(difference)
    # print('symdifference:')
    # test_cases(symdifference)
    # print('cartesian_product:')
    # test_cases(cartesian_product)
    # print(thicc_cartesian_product([1,2], [3,4,5], [6,7,4,5], [2,4,6]))
    # print()
    # print(thicc_cartesian_product([1,2], [3,4], [6,7], [2,4]))
    # print()
    # print(thicc_cartesian_product(['red','white'], ['project','spark'], ['stuy','legacy'], ['tech','unique']))
    # print()
