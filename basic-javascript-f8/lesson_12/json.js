// 1. JSON là một định dạng dữ liệu (Chuỗi) 
// 2. JSON == JavaScript Object Notation
// 3. JSON: Number, Boolean, NULL, Array, Object -> Encode / Decode / Stringify (JS -> JSON) / Parse (JSON -> JS)

// var json = '["JavaScript", "Python"]';
var json = '{"name":"Acus", "age": 18}';

// parse = json -> javascript
console.log(JSON.parse(json));

// stringify = javascript -> json
console.log(JSON.stringify({
     location: "Ho Chi Minh",
     test: function() {}
}))