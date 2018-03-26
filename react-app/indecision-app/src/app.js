console.log("Test");
//JSX- Js syntax extension. Way to define our templates and inject our date into those templates.

var template = <h1 id = "someId">This is JSX from app.js...</h1>
//Babel- JS COMPLILER FOR ES6/ ES-7 TO ES-5

//.render(JSX we want to render,DOM element where we would like to render)
var appRoot = document.getElementById('app-div');
ReactDOM.render(template, appRoot);