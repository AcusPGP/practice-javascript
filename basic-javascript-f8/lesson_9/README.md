# Lesson 9: Loops

## code: 
- click [here](./main.js)

## for
```js
     for (expression 1; expression 2; expression 3) {
          execution code;
     }
```
## for/in
```js
     for (variable in array) {
          execution code;
     }
```
## for/of
```js
     for (variable of array) {
          execution code;
     }
```
## while
```js
     while (condition) {
          execution code;
     }
```
## do/while
```js
     do {
          execution code;
     } while (condition)
```

## keywords `break` and `continue`
| Keyword | Explaination |
|---------|--------------|
|`break`| The `break` statement "jumps out" of a loop. |
|`continue` | The `continue` statement "jumps over" one iteration in the loop. |

## nested loop = loop in loop = double loops
```js
     for (expressions 1) { // Loop 1
          execution 1
          for (expressions 2) { // Loop 2
               execution 2
          }
     }
```