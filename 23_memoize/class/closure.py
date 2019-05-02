import random

def make_HTML_heading(f):
    print(f)
    txt = f()
    print(txt)
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner

# def greet():
#     greetings = ['Hello', 'Welcome','AYO!', 'Hola', 'Bonjour', 'Word Up']
#     return random.choice(greetings)

# equiv to greet = make_HTML_heading(greet)
@make_HTML_heading
def greet():
    greetings = ['Hello', 'Welcome','AYO!', 'Hola', 'Bonjour', 'Word Up']
    print(greetings)
    return random.choice(greetings)

# greet_heading = make_HTML_heading(greet)
# print(greet_heading())

print(greet())
