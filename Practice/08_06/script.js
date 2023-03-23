/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
const object = {
    name: 'Vika',
    lastName: 'Gramovich'
}

const create = function (object) {
    const article = document.createElement('article');
    const content = `<h1>Name: ${object.name}</h1>
    <h2>Last Name: ${object.lastName}<h2/>`;
    article.innerHTML = content;
    return article;
}

const main = function() {
    const main = document.querySelector('main');
    main.append(create(object));
}

main();