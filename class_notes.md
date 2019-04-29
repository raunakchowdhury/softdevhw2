# 2019-04-28
## Aim: JS and the Holy Trinity
- Reduce in JS:
``` js
x = [1,2,3,4]
x.reduce(function(a,b){return a+b});
```
- Holy trinity of data processing: filter, map, and reduce
- Map:
```js
var x = [1,2,3,4];

var newX = x.map(function(n){
  return n * 2;
});

console.log('The doubled nums are', newX); //[2,4,6,8]
```
- filter in JS:
``` js
var x=[1,2,3,4];
var newX = x.filter(function(n){ return n % 2 ==0});
```
- will create a list of only even elements of x
- newX: [2,4]

# 2019-04-17
- **Reduce**
  - Does successive ops
  - use:
  ''' python
  from functools import reduce
  reduce(fxn,list)
  '''
- lambda in Python:
  - must return a value
  - should remind you of Scheme/Racket/LISP
  - conditionals must be in the form of a python ternary op: `exprA if condition else exprB`

# 2019-03-15
## Event Propagation
1. An element intercepts an event
1. Browser collects DOM node path of the evenet from the starting element to the root.
1. **Capture**: event propagates down the path from step 2
1. **Bubble**: event propagates up the path from step 2


- *default*: event listeners trigger in bubbling phase
- To trigger during capture phase, add true as optional third arg to **addEventListener**
``` js
x.addEventListener('click', foo, true);
```
- also *default*:
  - event propagates down
- stop that using `e.stopPropagation()`
- **this**
  - has different meanings depending on the JS context from which it is being used:
    - in a JS obj, this refers to a calling obj
    - in an event listener, this refers to currently triggered element
- **.target**
  - returns element that began the event propagation chain

# 2019-03-14
## XML (eXtensible Markup Language)
- Used to create other languages
- defines a set of rules for encoding data in a format which is both *human-readable* and *machine-readable*.
- note a formatting lanuage
- allows to define a filetype
- framework for creating markup-based grammars
- uses some syntactic standards of HTML (tags, attributes)
- emphasizes **organizing and representing** data (instead of rendering/displaying it)
- an XML namespace is defined by the tags and attributes associated with a specific XML language

## Raster image encoding:
  - raster encoding: **bit-by-bit** specification of an image (even if compressed, a la PNG, JPEG, GIF, etc...)

## SVG: Scalable Vector Graphics
- vector image format
- XML-based
- an SVG img and its actions are defined in xml text files
- Vector graphics are images not represented in a 2D grid of pixels (raster) but instead as a **list of drawing commands** (eg: line, circle, rectangle curve)
- Biggest advantage to vector graphics is that they are **scalable to any size** without any loss in resolution
- `<svg>` element is designed to store SVG code (ie: SVG XML elements)
- **xmlns**: Attribute that identifies the namespace for the specific XML langauge being used.
- eg:
``` html
<svg xmlns="http://w3.org/2000/svg/">
  <!-- <symbols defined in svg here> -->
</svg>
```

# 2019-03-18
## The Basics
- Include `http://d3js.org/d3.v5.min.js` in the script tag to use d3, or download the source and link that instead
- Selectors
  - Uses jquery
  - Consisify selection of DOM elemetns
- `d3.select(IDENTIFIER);`
  - returns first element matching given identifier
- `d3.selectAll(IDENTIFIER);`
  - returns an array of all ekements matching given identifer
- You can set various attributes: `d3.select.("body").style("color","red");`
- ... also pass **functions** to set the values dynamically:
<!-- ``` js
d3.selectAll('p')
  .style('font-size', function(){
    // some num op
  };
``` -->

# 2019-03-19
- Enter selection: collection of placeholder nodes for each data element for which no corresponding existing DOM element was found.
