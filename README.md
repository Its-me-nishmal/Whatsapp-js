### Using filter:

```javascript
function strCount(str, letter){
    let array = str.split("");
    let res = array.filter(element => letter === element);
    return res.length;
}
