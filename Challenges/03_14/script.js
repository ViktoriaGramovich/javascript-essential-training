/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const book1 = new Book('Alisa', 'Book1', 'Vika', 'Hramovich', 300);
const book2 = new Book('Alisa', 'Book1', 'Vika', 'Hramovich', 300);
const book3 = new Book('Bus', 'Book3', 'Vika', 'Hramovich', 300);
const book4 = new Book('Motorcycle', 'Book4', 'Vika', 'Hramovich', 300);

console.log('Book 1:', book1.name, book1.description);
book2.updateBookProperties('Car', 'Book2');
console.log('Updated Book 2:', book2.name, book2.description);
console.log('Book 3:', book3.name, book3.description);
console.log('Book 4:', book4.name, book4.description);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
