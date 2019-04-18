from functools import reduce
f = open('pride_and_prejudice.txt', 'r').read().split('\n')
lines = [set(x.split(' ')) for x in f]

def find_freq(word):
    """find the freq of one word"""
    word_list = [1 for line in lines if word in line] # create a list of 1s that reduce() can use
    return reduce(lambda x,y: x+1 if y==1 else x, word_list) # x takes on the type of the elements in the array

def find_freq_words(words):
    """finds freq of a list of words and returns their total"""
    word_list = [1 for line in f if words in line]
    return reduce(lambda x,y: x+1 if y==1 else x, word_list) # x takes on the type of the elements in the array

def find_largest_freq():
    """find the freq of the word that occurs the most."""
    words_list = {word for line in lines for word in line}
    word_freqs = [(find_freq(word), word) for word in words_list]
    max_freq = max(word_freqs)
    return max_freq[0], max_freq[1]

if __name__ == '__main__':
    print(find_freq('be'))
    print(find_freq_words('Jane Austen'))
    print(find_largest_freq())
