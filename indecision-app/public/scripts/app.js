"use strict";

console.log("Test");
//JSX- Js syntax extension. Way to define our templates and inject our date into those templates.

//There must alwaysbe a single root element.Here wrapper <div>
var app = {
    title: "Indecision",
    options: ['one', 'two']
};

function getOptionsLength(options) {

    if (options.length > 0) return React.createElement(
        "p",
        null,
        "Here are your options:: First: ",
        options[0] + ' Second : ' + options[1]
    );else return React.createElement(
        "p",
        null,
        "No options"
    );
}

var onFormSubmit = function onFormSubmit() {

    return function (e) {

        e.preventDefault();
        console.log('Form Submitted');
        //const optionTarget = e.target;
        // console.log(optionTarget);
    };
};
//bracket techniques are not mandatory
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        { id: "someId" },
        app.title
    ),
    app.subtitle ? React.createElement(
        "p",
        null,
        "subtitle : ",
        app.subtitle
    ) : '',
    getOptionsLength(app.options),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Step 1"
        ),
        React.createElement(
            "li",
            null,
            "Step 2"
        ),
        React.createElement(
            "li",
            null,
            "Step 3"
        )
    ),
    React.createElement(
        "form",
        { onSubmit: onFormSubmit },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
            "button",
            null,
            "Add OPtion"
        )
    )
)
//or {app.subtitle && <p>subtitle : {app.subtitle}</p>} 
;

var appRoot = document.getElementById('app-div');
ReactDOM.render(template, appRoot);
/*
JSX does not have built in data binding
REactt uses some virtual Dom algo in js to determine the minimal no of changes that need to be made
in order to correctly render the new application
Virtual DOM algo run in js. THis calucates any change that is made and if the do then calculate the minimal 
no of changes. In above case just the {count}
*/
