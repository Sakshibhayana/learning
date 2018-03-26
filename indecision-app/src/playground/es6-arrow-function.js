function square(x){

return x * x;
}
console.log(square(8));

/*const squareArrow =  (x) => {
//Es6 arow functions are always anonymous. There is no way to define their name
    return x * x;
}*/

const squareArrow =  (x) => x * x; //we do not use return statement explicitly.implicitly kt is returned
        
console.log(squareArrow(9));

//Challenge
const fullName="Sakshi Saxena";
const getFirstName = (fullName) => fullName.split(' ')[0];


const getFirstNamE5 = function(fullName){
    const getFirstName = fullName.split(' ')[0];
    return getFirstName;
};
  console.log(getFirstName(fullName));
  console.log('sdsd'+getFirstName); // this logs the es5 script of arrowFunction getFirstName line 18
  console.log('old : '+getFirstNamE5(fullName));
