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
    function Book(){
        
    }

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
        return saveBookInLibrary();
    }
       

    Book.prototype.createErrorWarning = function() {
        alert("please, insert a number that's bigger than 0");
        
    }
    
    
    
    

    let libraryInfo = Object.create(Book.prototype);
    let libraryStore = [];
    let container = document.querySelector(".bookArea");
    //libraryStore = Object.create(Book.prototype);
    libraryInfo.checkButtonClick();
    let i = 0;

    function saveBookInLibrary()    {
        libraryStore[i] = libraryInfo;
        
        return displayAllArrayContent();
        
        
    }
    function displayAllArrayContent()   {
        
        /*
            'beforebegin': before the element
            'afterbegin': before its first child of the element.
            'beforeend': after the last child of the element
            'afterend': after the element
        */
       //   So it'll be added before the 1st child
        container.insertAdjacentHTML("afterbegin",
        `<div data-index${ i} class="newBooks" >
        <p class="bookContainer">${libraryStore[i].book}</p>
        <p class="bookContainer">${libraryStore[i].author}</p>
        <p class="bookContainer">${libraryStore[i].pages}</p>
        <label>
        <input type="checkbox" class="checkBox">
        <input type="button" value="Delete Book" class="deleteButton" onclick="deleteBook();">
        </label>`
        )
        console.log(libraryStore)
        i++;
    }    
    function deleteBook()   {
        let dataHold = document.querySelectorAll(".newBooks");
        console.log(dataHold.)
    }
    