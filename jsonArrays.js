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
    let books = {}
    let arryBooks = [];
    books.bookName = bookName;
    books.author = author;
    books.price = Number(price);
    books.publisherDt = publisherDt;
    books.publisher = publisher
    books.summary = "The name of book is " + books.bookName + ", author i " + books.author

    // Saving the book details in the local storage on the name of "lsBooks"
    if (localStorage.getItem("lsBooks") != null) {
        arryBooks= JSON.parse(localStorage.getItem("lsBooks"));
       
    }
    arryBooks.push(books);
    localStorage.setItem("lsBooks", JSON.stringify(arryBooks));
    alert(localStorage.getItem("lsBooks"));

}

function showTable(){
    lstBooks=[];
    lstBooks=JSON.parse(localStorage.getItem("lsBooks"))
    tblDom=`   <tr>
            <th>
                Book Name
            </th>
            <th>
                Author
            </th>
            <th>
                Price
            </th>
            <th>
                PublishDt
            </th>
            <th>
                Publisher
            </th>
            <th>
                Summary
            </th>
        </tr>`;
    for(i=0;i<lstBooks.length;i++)
    {
        tblDom=tblDom+   `<tr>
        <td>
            ${lstBooks[i].bookName}
        </td>
        <td>
           ${lstBooks[i].author}
        </td>
        <td>
           ${lstBooks[i].price}
        </td>
        <td>
            ${lstBooks[i].publisherDt}
        </td>
        <td>
          ${lstBooks[i].publisher}
        </td>
        <td>
          ${lstBooks[i].summary}
        </td>

    </tr>`
    
    }
    document.getElementById("tblBooksDetails").innerHTML=tblDom;
    alert(tblDom);
}