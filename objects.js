const homeProperties = { name: "Vedam Mahal", address: "Kathef Street", city: "Eluru", state: "AP" };

var books = {};


document.getElementById("pName").innerHTML = homeProperties.name;
document.getElementById("pAddress").innerHTML = homeProperties.address;
document.getElementById("pCity").innerHTML = homeProperties.city;
document.getElementById("pState").innerHTML = homeProperties.state;


/**
 * Save Book Details 
 * Used for a click event .
 * @author Jacob Paul 
 *  @param {String} bookName - bookName.
  * @param {String} author - author.
  * @param {String} price - price.
  * @param {String} publisherDt - publisherDt (Date).
  * @param {String} publisher - publisher.
 * @returns {Void} Void
 */
function saveBook(bookName, author, price, publisherDt, publisher) {
    debugger;
    books.bookName = bookName;
    books.author = author;
    books.price = Number(price);
    books.publisherDt = publisherDt;
    books.publisher = publisher
// Saving the book details in the local storage on the name of "lsBooks"
    localStorage.setItem("lsBooks", JSON.stringify(books));
    alert(localStorage.getItem("lsBooks"));
    localStorage.setItem('lsHomeProperties', JSON.stringify(homeProperties));
    alert(localStorage.getItem("lsHomeProperties"));
}