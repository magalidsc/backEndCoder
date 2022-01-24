class User {
    constructor(name, lastName, books, pets) {
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;
    }
}


const newUser = new User('Magalí', 'de Sousa', [{ bookName: 'El principito', author: 'Antoine de Saint-Exupéry' }], ['ferret', 'dog'])



// Funciones

function getFullName() {
    console.log(`El nombre es ${newUser.name} ${newUser.lastName}`)
}

function addPet(newPet) {
    newUser.pets.push(newPet)
    console.log(newPet)
}

function countMascotas() {
    console.log(newUser.pets.length)
}

function addBook(bookName, author) {
    newUser.books.push({ bookName, author })
    console.log(newUser.books)
}

function getBookNames() {
    let listBooks = newUser.books.map(book => book.bookName)
    console.log(listBooks)
}

getFullName();
addPet('Horse');
countMascotas();
addBook('El hombre en busca de sentido', 'Viktor Frankl');
getBookNames();
console.log(newUser)