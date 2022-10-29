//this changes within context. 
/*
    In a method, this have the same scope of the method
    This in the global is global *window*
    In a function, a non strict one, this refers to global. 
    But for strict, this returns undefined.
    Inside a event, this refers to the element of the event.
    Call(), Apply(), bind() can refer to this at any object.
*/
    
    //  Create model class
    let mainContainer = document.querySelector(".bookArea");
    function Book(){
        
    }
    //  Create methods
    //  I'm not really sure if that is the most optimal way of doing it. Seems kinda bad to write, too much text for just a few things...
    /*Book.prototype.createElementContainer = function()  {
        this.containerCreator = document.createElement("section");
        this.containerCreator.setAttribute("class","booksContainer");
        mainContainer.appendChild(this.containerCreator);
        mainContainer.classList.add("bookArea");
        this.newContainer = document.querySelector(".booksContainer");
        
    }*/

    /*Book.prototype.createTextAboutTheBook = function()  {
        this.text = document.createElement("h2");
        this.newContainer.appendChild(this.text);
        this.newContainer.classList.add("booksContainer");
        this.text.textContent = "This is my library";
    }*/
    

    Book.prototype.checkButtonClick = function()    {
        this.check = document.querySelector("#ButtonConf").addEventListener("click", () =>{
            this.gotClick = true;
            return this.checkAgain(this.gotClick);
        });//Only Run if all values match their required type.
    }
    Book.prototype.checkAgain = function(click)   {
        if(click === true){
            return this.getInputs();
            //add the book to the array
        }
    }

    Book.prototype.getInputs = function()   {
        this.book = document.querySelector("#Insert_B").value;
        this.author = document.querySelector("#Insert_A").value;
        this.pages = document.querySelector("#Insert_P").value;
        if(this.book == "" || this.author == "" || this.pages == "" ){
            return alert("Please, add a value to all inputs"); //   In order to avoid empty inputs as it could lead to a weird looking page.
        }
        return this.dealWInput(this.pages,this.book,this.author);//  Since books can be named as a number, i won't bother checking them.
    }
    
    Book.prototype.dealWInput = function(pages,book,author) {
        //  Check pages.
        this.newBook = book;
        this.newAuthor = author;
        this.newPages = pages;
         //since the value is lost if we try to add book,author,pages to the next function, i'll create new variables.
        if(typeof(pages) !== "number")  {
            pages = parseInt(pages);
            return this.pageChecker(pages);
        }else{
            return this.pageChecker(pages);
        }
    }
    Book.prototype.pageChecker = function(pages)    {
        if(pages < 1)   {
            return this.createErrorWarning();
            
        }else{
            return this.sendBook_To_Library(this.newBook, this.newAuthor, this.newPages);
        }
    }
    Book.prototype.sendBook_To_Library = function(newBook, newAuthor, newPages)    {
        return saveBookInLibrary(newBook, newAuthor, newPages);
    }
    /*Book.prototype.appendEverything = function()    {
        this.newParagraphBook = document.createElement("p");
        this.newParagraphAuthor = document.createElement("p");
        this.newParagraphPages = document.createElement("p");
        this.newContainer.appendChild(this.newParagraphBook);
        this.newContainer.appendChild(this.newParagraphAuthor);
        this.newContainer.appendChild(this.newParagraphPages);
        this.newContainer.classList.add("booksContainer");
        this.newParagraphBook.textContent = `${this.book}\n`;
        this.newParagraphAuthor.textContent = `${this.author}\n`;
        this.newParagraphPages.textContent = `${this.pages}\n`;
        return saveBookInLibrary(this.newParagraphBook,this.newParagraphAuthor,this.newParagraphPages); 
        //Should the information only. Try to append later, disable the example function, it's useless and will confuse you more.
       }// Kinda big =/ */
       

    Book.prototype.createErrorWarning = function() {
        alert("please, insert a number that's bigger than 0");
        
    }

    let libraryInfo = Object.create(Book.prototype);
    libraryInfo.checkButtonClick();

    function saveBookInLibrary(book,author,pages,isThere)    {
        let libraryStore = [
            book, //refers to thisNewParagraphBook
            author,
            pages,
        ]
        if(libraryStore.length <= 0){
            alert("The array is empty");
        }else{
            isThere = true; //  <<<<<!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if(isThere === true){
                while(libraryStore.length % 3 == 0) {
                    this.newParagraphBook = document.createElement("p");
                    this.newParagraphAuthor = document.createElement("p");
                    this.newParagraphPages = document.createElement("p");
                    this.newContainer = document.createElement("section");
                    this.newContainer.setAttribute("class", "bookContainer");
                    mainContainer.appendChild(this.newContainer);
                    this.newContainer.appendChild(this.newParagraphBook);
                    this.newContainer.appendChild(this.newParagraphAuthor);
                    this.newContainer.appendChild(this.newParagraphPages);
                    this.newContainer.classList.add("booksContainer");
                    this.newParagraphBook.textContent = `${book}\n`;
                    this.newParagraphAuthor.textContent = `${author}\n`;
                    this.newParagraphPages.textContent = `${pages}\n`;
                    break;
                }
            }
        }
        console.log(libraryStore);
    }
    

    //  Button click should've been activated before in order to properly evaluate the input.