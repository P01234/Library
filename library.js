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
    Book.prototype.createElementContainer = function()  {
        this.containerCreator = document.createElement("section");
        this.containerCreator.setAttribute("class","booksContainer");
        mainContainer.appendChild(this.containerCreator);
        mainContainer.classList.add("bookArea");
        this.newContainer = document.querySelector(".booksContainer");
        
    }

    Book.prototype.createTextAboutTheBook = function()  {
        this.text = document.createElement("h2");
        this.newContainer.appendChild(this.text);
        this.newContainer.classList.add("booksContainer");
        this.text.textContent = "This is my library";
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
        return this.dealWInput(this.pages);//  Since books can be named as a number, i won't bother checking them.
    }

    Book.prototype.dealWInput = function(pages) {
        //  Check pages.
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
            return this.appendEverything();
        }
    }

    Book.prototype.appendEverything = function()    {
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
        return this.saveBookInLibrary(); 
       }// Kinda big =/ 
       
    Book.prototype.saveBookInLibrary = function()   {
        
        let libraryStore = [
            this.newParagraphBook.textContent,
            this.newParagraphAuthor.textContent,
            this.newParagraphPages.textContent,
        ];
        console.log(libraryStore);
    }

    Book.prototype.createErrorWarning = function() {
        alert("please, insert a number that's bigger than 0");

    }

    let libraryInfo = Object.create(Book.prototype);
    libraryInfo.createElementContainer();
    libraryInfo.createTextAboutTheBook();
    libraryInfo.checkButtonClick();


    //  Button click should've been activated before in order to properly evaluate the input.