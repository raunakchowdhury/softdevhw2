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
