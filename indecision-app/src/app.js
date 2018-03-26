console.log("Test");
//JSX- Js syntax extension. Way to define our templates and inject our date into those templates.

//There must alwaysbe a single root element.Here wrapper <div>
const app = {
title : "Indecision",
options : ['one','two']
};

function getOptionsLength(options) {

    if(options.length>0)
    return <p>Here are your options:: First: {options[0]+ ' Second : '+ options[1]}</p>;
    else
    return <p>No options</p>;
}

const onFormSubmit = () => {

    return (e)=>{

   e.preventDefault();
    console.log('Form Submitted');
    //const optionTarget = e.target;
   // console.log(optionTarget);

    }
};
//bracket techniques are not mandatory
let template = (  
    <div>
        <h1 id = "someId">{app.title}</h1>
         {app.subtitle ? <p>subtitle : {app.subtitle}</p> : ''}
         
         {getOptionsLength(app.options)} 
         <ol>
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
        </ol>
        <form onSubmit = {onFormSubmit}>
            <input type="text" name='option'/>
            <button>Add OPtion</button>
        </form>
    </div>
    //or {app.subtitle && <p>subtitle : {app.subtitle}</p>} 
);


const appRoot = document.getElementById('app-div');
ReactDOM.render(template,appRoot);
/*
JSX does not have built in data binding
REactt uses some virtual Dom algo in js to determine the minimal no of changes that need to be made
in order to correctly render the new application
Virtual DOM algo run in js. THis calucates any change that is made and if the do then calculate the minimal 
no of changes. In above case just the {count}
*/


