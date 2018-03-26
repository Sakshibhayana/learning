//Argument objctes ar not bound to arrow functions

/*const add = function(a,b){
    console.log(arguments);
    return a+b;
}*/

const add =(a,b) => {
  //  console.log(arguments);
    a+b;
}

console.log(add(4,5,2000));

//this keyword is also not bound to arrow function

/*const user = {
    name: 'Andrew',
    cities : ['Delhi','Lakhimpur','Lucknow'],
    printPlacesLIved: function() {
        console.log(this.name); //accessible here
            console.log(this.name+' lives in '+city); //not accessible here
        });
    }
   
    
};*/


const user = {
    name: 'Andrew',
    cities : ['Delhi','Lakhimpur','Lucknow'],
    printPlacesLIved () {
        
      /*const cityMessages=  this.cities.map(function(city){
           return user.name+' lives in '+city;
        });*/
        return this.cities.map((city) => this.name+' lives in '+city);
       //console.log(cityMessages); 
        /*this.cities.forEach ((city) => {
            console.log(this.name+' lives in '+ city); 
        });*/
    }
   
    
};
//the above gu=ives error bcos when we add function onto an object property the value is bound to that object
//but when we just defin a regular anonymous function 
//like for each there is no bound this value &it gets set to equal to undefined

//with es6 arrow function, the functn no longer bind theere own this value
    //INstead the just use the value of the context tehy were created in

    
    //console.log(user.printPlacesLIved());

//Challenge

const multiplier = {
    numbers : ['10','20','30'],
    multiplyBy : '4',
    multiplyNos() {
        const newNos = this.numbers.map((no) => {
           return no*this.multiplyBy;
        });
        console.log(newNos);
    }

};
multiplier.multiplyNos();
