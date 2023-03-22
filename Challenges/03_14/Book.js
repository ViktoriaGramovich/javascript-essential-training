class Book {
    constructor(
        name,
        description,
        authorName,
        authorLastName,
        numberOfPages
    ) {
        this.name = name;
        this.description = description;
        this.author = {
            name: authorName,
            lastName: authorLastName
        };
        this.numberOfPages = numberOfPages;
    }
    updateBookProperties(name, description) {
        this.name = name;
        this.description = description;
    }

}

export default Book