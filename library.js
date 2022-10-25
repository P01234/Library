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
        this.library = [];
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
    Book.prototype.checkButtonClick = function()    {
        this.check = document.querySelector("#ButtonConf").addEventListener("click", () =>{
            this.gotClick = true;
            return this.array_Library(this.gotClick);
        });//Only Run if all values match their required type.
    }
    Book.prototype.array_Library = function(click)   {
        if(click === true){
            //add the book to the array
        }
    }
    Book.prototype.createTextAboutTheBook = function()  {
        this.text = document.createElement("ṕ");
        this.newContainer.appendChild(this.text);
        this.newContainer.classList.add("booksContainer");
        this.text.textContent = "This is my library";
    }
    

    let libraryInfo = Object.create(Book.prototype);
    libraryInfo.createElementContainer();
    libraryInfo.createTextAboutTheBook();