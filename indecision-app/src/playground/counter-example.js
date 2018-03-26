function getLocation(location) {
    if (location) 
        return <p>Location : {location}</p>;
    
else 
        return undefined;
        // Implicitly also undefined is returned . Hence else statement has no meaning
        // here.
    }
;
const user = {
    name: 'sakshi',
    userAge: '41'
};

const template2 = (
    <div>
        <h1 id="name">{user.name
                ? 'Name : ' + user
                    .name
                    .toUpperCase()
                : 'anonymous !'}</h1>
        {(user.userAge && user.userAge >= 18) && (
            <p>Age: {user.userAge}</p>
        )}
        {getLocation(user.location)}
    </div>
//JSX with value undefined, null and booleans is not rendered in DOM:
);
// Babel- JS COMPLILER FOR ES6/ ES-7 TO ES-5 .render(JSX we want to render,DOM
// element where we would like to render) ReactDOM.render(template2, appRoot);
// EventHandling
let count = 0;
const addOne = () => {
    console.log('addOne');
    count++;
    renderCounterApp();
    /* count = count+1;
    return */
};
const minusOne = () => {
    console.log('minusOne');
    count--;
    renderCounterApp();
    /* count = count+1;
     return */
};
const reset = () => {
    console.log('reset');
    count = 0;
    renderCounterApp();
    /* count = count+1;
     return */
};

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button id='increment' onClick={addOne}>+1</button>
            <br/>
            <button id='decrement' onClick={minusOne}>-1</button>
            <br/>
            <button id='reset' onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateThree, appRoot);
};
renderCounterApp();
/*const incrementValue() {
    return this.map((count) =>count = count+1);
};*/

var add = function (a) {

    return {
        func: function (b) { //anonymous functiom?
            return a + b;
        },
        a: a,
        k:a,
        v:a
    };
};
var addToFive = add(5);

console.log(addToFive.func(4));
