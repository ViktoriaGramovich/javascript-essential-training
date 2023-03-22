/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Computer from './Computer.js';


const personalComputer = new Computer('gray', 'Vika', 'Hramovich', '300', '200', '400', true);
console.log('Personal computer: ', personalComputer);
console.log(`Owner of computer: ${personalComputer.ownerInfo.name} ${personalComputer.ownerInfo["lastName"]}`);

personalComputer.triggerLoading(false);
const loadMessage = personalComputer.isLoaded ? 'loaded' : 'not loaded';
console.log(`The computer is ${loadMessage}`);