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
    // Class that will check if the addBook button on my page form got clicked. =)
    Book.prototype.checkButtonClick = function()    {
        this.check = document.querySelector("#ButtonConf").addEventListener("click", () =>{
            this.gotClick = true;
            return this.checkAgain(this.gotClick);
        });//Only Run if all values match their required type.
    }
    //  It's kinda redundant actually, this one will just gurantee that it was clicked.
    Book.prototype.checkAgain = function(click)   {
        if(click === true){
            return this.getInputs();
            //add the book to the array
        }
    }
    // Some constructors to get the form values, then it'll check if its empty or not.
    Book.prototype.getInputs = function()   {
        this.book = document.querySelector("#Insert_B").value;
        this.author = document.querySelector("#Insert_A").value;
        this.pages = document.querySelector("#Insert_P").value;
        if(this.book == "" || this.author == "" || this.pages == "" ){
            return alert("Please, add a value to all inputs"); //   In order to avoid empty inputs as it could lead to a weird looking page.
        }
    
        return this.dealWInput(this.pages,this.book,this.author);//  Since books can be named as a number, i won't bother checking them.
    }
    // It was used to check if all values matched their type althought only this.pages was really needed
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
    // Just checking if this.pages its less than 1, not much here since javascript has everything needed do check already done.
    Book.prototype.pageChecker = function(pages)    {
        if(pages < 1)   {
            return this.createErrorWarning();
            
        }else{
            return saveBookInLibrary();
        }
    }
       
    // just returning a warning =)
    Book.prototype.createErrorWarning = function() {
        return alert("please, insert a number that's bigger than 0");
        
    }
    
    
    //  Some needed global variables. I know it's a good practice, sorry.
    let libraryInfo = Object.create(Book.prototype);
    let libraryStore = [];
    let container = document.querySelector(".bookArea");

    //libraryStore = Object.create(Book.prototype);
    libraryInfo.checkButtonClick();
    let i = 0;
    //  Well, this one is a little weird, but passing the library info, who's holding the entire Book class to the array, makes it possible
    //  for the array to access the Book class aswell. Probably because it's recreating the entire libraryInfo inside libraryStore.
    function saveBookInLibrary()    {
        libraryStore[i] = libraryInfo;
        
        return displayAllArrayContent();
        
        
    }
    //  Display the content using insertAdjacentHTML, I used it because it makes easier to add things to HTML Dom tree
    function displayAllArrayContent()   {
        
        /*
            'beforebegin': before the element
            'afterbegin': before its first child of the element.
            'beforeend': after the last child of the element
            'afterend': after the element
        */

       //   So it'll be added before the 1st child
        container.insertAdjacentHTML("afterbegin",
        `<div data-index=${i} class="newBooks" >
        <p class="bookContainer">${libraryStore[i].book}</p>
        <p class="bookContainer">${libraryStore[i].author}</p>
        <p class="bookContainer">${libraryStore[i].pages}</p>
        <label class="checkBox">
        <p>read?</p><input type="checkbox" class="checkBox">
        </label>
        <input type="button" value="Delete Book" class="deleteButton" onclick="prepareDeleteBook(this)">`

        
        )
        console.log(libraryStore)
        i++;
    }
    //  Another tricky one, the libraryStore is being used to hold the elements because it's the main iterator. 
    // In other words it'll make possible for us to delete the exact "Card". The "This" keyword, another tricky part of js,
    //  Seems to be pointing to global object, since it's inside a normal function, but nope, it's not, it is inside the insert
    //  AdjacentHTML, making it a local this, allowing us to access its parentElement, newBooks, who's got the data-index with the iterator.
    //  Then we remove the entire parentElement. using Remove().
    function prepareDeleteBook(e)   {
        delete libraryStore[e.parentElement.dataset.index]
        e.parentElement.remove();
        
    }
    /*
        Overall, this was my first OOP project, it was somewhat difficult despite not've used all OOP concepts. Took me a couple of weeks
        to figure out how classes, this and how to add that delete functionality, it was tought but also a fun project to create. 
    */
   
    