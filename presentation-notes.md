# Notes for Softdev Presentations

## Continuous Integration -- 2019-02-26
- CI - Merge all working copies within the course of a day
- Unit, Functional, Integration Testing
- Travis CI - GitHub CI Integration
  - Need a `.travis.yml` file to run the Travis file

## Ocaml -- 2019-02-27
- Formerly known as Objective Caml (abstracting machine language)
  - Made to be highly readable and excels at recursion
  - Considered to be one of the fastest high-level languages.
- Ocaml syntax:
``` ocaml
let rec fib i =
    if i <= 1 then 1 else fib(i-1) * fib(i-2);;
```

## Ionic Mobile Dev -- 2019-02-28
- Allow for cross-platform app development and deployment
- Focuses:
  - Frontend UX
  - Easily integrates with other libraries and frameworks
- Large community, open source, official integration with AngularJS
- Ionic CLI -> main development tool
- Run the commands:
```
$ ionic start myApp blank
$ ionic serve
```
- Write in TypeScript -- transpiles into the current JS so that the browser can run it smoothly
- Can generate multiple templates
- Iconic vs ionic / what is urg / where's the repo avialable

## LaTeX -- 2019-03-01
- Uses markup tags to define general structure, stylize, text, and citations
- Implements macros to make writing easier
- Can get it at [miktex.org](miktex.org)
``` latex
\documentclass[12pt,letterpaper]
\begin{document}
    \title{uwu}
    \maketitle
    \section{owo}
\end{document}
```
## SQL Injection -- 2019-03-05
- SQL Injection is the most common attack on web applications.
- Successful attacks can allow people to:
  - Corrupt data
  - Gain admin priveleges
  - Destroy backup files
- Causes of SQL injection attacks:
  - clout of business
  - insufficient checks on user inputs (sanitization)
- A few examples:
  - Heartland Payment Systems -- credit card companies
- Three types of attacks
  - Error based - use malicious queries to force applications to throw SQL errors to learn about vulnerabilities
  - Union based - use UNION for additional queries, which can lead to unlimited possibilities
  - Inferential/blind - See if the application is blind to expose vulnerabilities through true/false statements
- Measures to defend against attack:
  - Sanitize user input first
  - Use params rather than building the command explicitly
  - Avoid dynamic SQL as much as possible
  - Hide error messages from SQL injection attacks

## Sass -- 2019-03-06
- Why Sass?
  - Css is tedious to type
  - Allows for vars, nesting, import/extend functionalities
- 3 standalone ways:
  - Using standalone cmd interface w Dart-Sass
  - using npm to integrate with JS easily, but slower
- To compile into CSS:
  - ` sass input.scss output.css`
- Example Sass:
``` scss
$font-stack: Helvetica, sans-serif;
$primary-color: blue;
body{
    font-size: $font-stack;
    color: $primary color;
}
```
- Some cool stuffs:
``` sass
nav{
    ol{
      margin: 1%
    }
}
```
  - Allows for css tags to generate automatically (the above scss will result in `nav ol` CSS being generated); see below:
  ``` CSS
  nav ol{
      margin: 1%;
  }
  ```
- Allows for Sass files to import each other through `#import '<filename>'` Note that file endings aren't needed.
- Supports extending and inheritance
  - Can declare tags but don't use it:
  ``` sass
    $ message-shared{
        ...
    }
    .message{
        @extend message-shared
    }
  ```
  - Can define functions:
  ``` sass
  $function getColWidth($width, $column){
      ...
  }
  ```
  - ...and loops as well!

## Haskell - 2019-03-09
- Pure, functional, and lazy programming (**prefix language**)
- Haskell programs can be **formerly verified**
  - Can match papers; as a result, code is often shorter and more concise
- Type system is from ML-based languages and is statically typed
- Can take in functions as parameters as well as return them
- Functions always return the same output -- "referential transparency"
- *Pure* - functions can only do one thing
- Exempli gratia:
``` haskell
sumAndSquare :: Integer -> Integer -> Integer
```
- Haskell will only allow for functions to do what it is needed
- Lazy: does not evaluate a value until it is needed
  - Allows for *infinite data sructures*
- fib example:
``` haskell
fibs = 0 : 1 : zipWith (+) fibs (tail fibs)
```
- The `0 : 1` defines a list containing `[0,1]`

## Rust -- 2019-03-10
- Rust is a fast low level programming language and aims to be a "safer" version of C
- Has many use cases because of its fast low level capabilities and high level safety features
``` rust
  fn is_divisible_by(lsh: u32, rhs:u32) -> bool{
      if rhs == 0{
        return false;
      }
      lsh % rhs == 0;
  }

  fn main(){
      println!("{}, {}, {}", is_divisible_by(2,4));
  }
```
- Has another variant: unsafe Rust
- Use the unsafe keyword and then start a new block that holds unsafe code
``` rust
  fn main(){
    let a = 5;
    unsafe{
      *a = 4; //dereference a pointer; originally can't do this w/o unsafe
    }
}
```

- Pros of Rust:
  - Ownership
    - something about variables
    ``` rust
      fn main(){
        let num = Box::new(3);
        helper(num);
      }

      fn helper(num : Box<u32>){
        // code here
      }
    ```
    - *Personal note*: look into this
  - Borrowing
    - owned values can be borrowed for a certain period of time
    - if something is being borrowed it can't be removed
  - Mutablility
    - Values are immutable by default, and must be declared as mutable.
    ``` rust
    let a = 5;
    a = 3; // error
    let mut a = 5;
    a = 3; // this gud
    ```
  - Concurrency
    - Rust provides a library for it to run in parallel
    - Eliminates data races (race condtitions) at compile time (parent thread vs child thread) preventing mistakes before they occur.

## NodeJS -- 2019-03-12
- JS runtime environment built on Google's V8 JS engine
- Allows us to run JS on the server instead of the browser
- Used to build powerful, fast, and highly scalable apps
- Why use it?
  - Use JS for both backend and frontend
  - Using NPM (Node Package Manager) gives developers many tools/modules to use
  - Event-driven, non blocking I/O model -- can push data to many different clients in real time
- Non-Blocking I/O
  - Uses a single thread to handle multiple requests instead of waiting for one request to be completed before handling another request
- npm (NodeJS package manager)
  - Used to install node programs/modules
  - Popular modules include:
    - Express - Webdev Framework
    - Pug - Template engine
- Start a project:
  - `$ npm init`
  - package.json - includes package installs, names, metadata
- To install packages from JS:
``` js
var module = require('module_name');
```
  - Installs the module from npm.
- Run commands using node: `$ node <command>`

## PhoneGap -- 2019-03-13
- Mobile app dev framework
- Used to make cross-platform mobil applications built with HTML, CSS and JS on Android and iOS
- Uses the same code base for all users no matter what device is being used.
- Not a native mobile app or purely web based
- Installation:
  - PhoneGap has two apps, one for phone and one on a website
  - Run the app and connect your phone to the local ip addr
- Need to install node.js first
- Question: this vs. Ionic?
- Very similar to have we configured our droplets (it has a `www` dir in the project)

## Google Pagerank Algorithm -- 2019-03-14
- Uses link analysis algorithm like HyperSearch
- "Link popularity" -- how many people click on the link
- Some series to determine "page rank"
  - More math

## Shell Scripting -- 2019-03-15
- Three types of shells - Bourne Shell, C Shell (CSH), Korn Shell (KSH)
  - Bourne Again Shell (BASH) (uses the `$` symbol)
- Shell scripting: A script that contains a series of commands for the shell to interpret and execute
- Why to learn: QoL, create own commands, sysadmin stuff
- Drawbacks:
  - Slower than C program
  - Lots of bad scripts out there because it's so easy to write
  - Easy to make accidental typos
- To write a shell script ( must begin with the `#! /bin/sh` to designate it as a shell file):
<!-- ``` bash
  #! /bin/sh
  echo "hello world"
  some_var = "f"
  echo "$some_var"
  for i in marge bart homer lisa 6 7 8
  do
      echo "$i"
  done
  editor="atom"
  while ["$editor" != "vim"]
  do
      echo "wrong answer, try again"
      read editor
      echo "u typed: $editor"
  done
  echo "good choice"
  sleep = 1
  if ["$sleep" -lt "5"]
  then
      echo "tired"
  elif ["$sleep" -eq "4"]
  then
      echo "yurd"
  fi # ends the if statement
  # colon (:) always evaluates to true
  while : #evals to true
  case $theme in renaissance)
      echo "slate says yes"
      break
      ;;
```
```
$ bash <script.sh>`
$ chmod a+x <script.sh>`
$ ./<script.sh>
``` -->

## Pandas -- 2019-03-18
- Pandas - Python data analytics library
- Series - 1 dimensional array and can hold data of any type
- Dataframe - 2-d array
  - Can hold columns of mixed types - Can be thought to be a dictionary of a series
``` python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
```
``` python
df = pd.read_csv('data.csv')
# insert a new column
df['gpa_4.0'] = df.gpa / 25
```

## less -- 2019-03-19
- Less -- Leaner Style Sheets
- Makes code quicker to write and easy to read, inspired by CSS and SASS
- Less can be used as a nodeJS package
- Can be downloaded as a JS file and embedded using `<script>` tags
``` less
// Variables
width: @width;
height: @height;
// Mixins
.centered{
    margin: 0 auto;
}
```

## Python NumPy SciPy -- 2019-03-20
- SciPy is a free and open source python library used for scientific computing
- SciPy Ecosystem is the library itself
- NumPy is a package with scientific computations with Python
- Arrays can be initialized in NumPy using `reshape(**kwargs)`
  - The # of numbers you put in (2,3,5)

## Splay Trees -- 2019-03-25
- Binary search tree where the searching becomes faster as you search within it
  - If you need to look up something multiple times and it's at the bottom, a BST will find it slowly
  - A splay tree will move the node you're looking up closer to the root for quicker access
- Combination of 2 moves used when the searched node has a parent and a grandparent
- "Zigs" and "Zags" -- shifts around root
- A method called splay allows for quick insertion/deletion
- Used in:
  - Cool search algorithms
  - gcc compiler
  - Windows NT

## Scala -- 2019-03-28
- Released in 2001 and runs on JVM
- General purpose, high-level language with strong static typing
  - Supports both OOP and fxnal programming
  - Lazy eval
- Syntacticall flexible
  - Allows for better multiline params
- Has a unified type system
- For expressions rather than foreach loops
- Scala has a learning curve because of advanced features
```scala
object HelloWorld{
  def main(args: Array[String]:): Unit = {
    println("Hello World!")
  }
}
```
- Returns last statement in function without a return keyword
