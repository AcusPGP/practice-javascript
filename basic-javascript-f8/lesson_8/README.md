# Lesson 8: Ternary operator

## If-else
```js
     if (condition 1) {
          execution 1;
     } else if (condition 2) {
          execution 2;
     } else {
          execution 3;
     }
```
- If one of the conditions is true, all the rest of the conditions after the right condition are wiped out.

## Switch
```js
     switch (object/variable) {
          case 1:
               execution 1;
               break;
          case 2:
               execution 2;
               break;
          default:
               execution 3;
     }
```
- With out the keyword `break`, if one of the conditions is true, all the rest of the conditions after the right condition are executed.

## Tenary operator = Simplier conditonal operator
```js
     var result = condition ? execution 1 : excution 2;
```