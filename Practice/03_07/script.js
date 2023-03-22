/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const computer = {  
    color: "black",  
    ownerInfo: {    
        name: "Vika",    
        lastName: "Gramovich"  
    },
    size: {
        height: 230,    
        width: 150,    
        length: 300   
    },
    isLoaded: false,
    changeOwner: function(owner) {
        this.ownerInfo.name = owner.name;    
        this.ownerInfo.lastName = owner.lastName;  
    },  
    triggerLoading: function(loadStatus) {    
        this.isLoaded = loadStatus  
    }
};

console.log("The computer object:", computer);
console.log(`The owner info: ${computer.ownerInfo.name} ${computer.ownerInfo.lastName}`);