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

if __name__ == '__main__':
    print(pyth_triple(30))
    print(quick_sort([3,7,5,2,5,7,8,9,102,20]))
