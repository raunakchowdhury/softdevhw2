cap_letters = {letter for letter in "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
letters = {letter for letter in 'abcdefghijklmnopqrstuvwxyz'}
numbers = {num for num in '0123456789'}
special_chars = {char for char in '. ? ! & # , ; : - _ *'}

def check_pass(passw):
    '''
    checks passw for min reqs: at least 1 capital, 1 lowercase, and 1 number.
    '''
    global cap_letters
    global letters
    global numbers
    char_set = {1 if element in letters else 2 if element in cap_letters else 3 if element in numbers else 0 for element in passw}
    return 1 in char_set and 2 in char_set and 3 in char_set

def strength_rating(passw):
    '''
    returns a rating for password strength.
    '''
    if not check_pass(passw):
        return 0
    char_list = [1 if element in letters else 2 if element in cap_letters else 3 if element in numbers else 4 if element in special_chars else 0 for element in passw]
    if len(passw) >= 10:
        return 10
    return (char_list.count(1) + char_list.count(2) + char_list.count(3) + char_list.count(4)) % 10

if __name__ == '__main__':
    print(check_pass(''))
    print(check_pass('f'))
    print(check_pass('Je'))
    print(check_pass('Je1'))
    print(strength_rating('4$5fF'))
    print(strength_rating('4$5f^&!GF'))
