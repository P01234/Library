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

    Book.prototype.getInputs = function()   {
        this.book = document.querySelector("#Insert_B").value;
        this.author = document.querySelector("#Insert_A").value;
        this.pages = document.querySelector("#Insert_P").value;
        return this.dealWInputs(this.pages);//  My naming ability is bad =/ Since books can be named as a number, i won't bother checking them.
        //Works!
    }

    Book.prototype.dealWInputs = function(pages) {
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
            return this.checkButtonClick();
        }
    }
    Book.prototype.createErrorWarning = function() {
        alert("please, insert a number that's bigger than 0");
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
    libraryInfo.getInputs();


    //  Button click should've been activated before in order to properly evaluate the input.