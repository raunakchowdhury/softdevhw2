# Notes for Softdev Presentations

## Continuous Integration -- 2019-02-26
- CI - Merge all wokring copies within the course of a day
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
