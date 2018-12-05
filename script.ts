
let bookshelfDOM = document.getElementsByClassName('containsAll')[0];

enum BookGenre{
    historicalFiction,
    modernLiterature,
    novel,
    play,
    epicPoetry
}
enum BookLanguage{
    English,
    French,
    Russian,
    Spanish,
    AncientGreek
}
enum SortType{
    title,
    author,
    pubYear,
    pageNum,
    oLang,
    genre,
    originalTitle
}

interface Book {
    title: string;
    author: string;
    yearOfPublication?: number;
    pageNum?: number;
    originalLanguage: BookLanguage;
    genre?: BookGenre;
    readBefore: boolean;
    originalTitle?: string;
    bookCover: string;
}

class Libray{
    bookShelf: Book[];
    constructor(){
        this.bookShelf = [];
    }
    addBook(book: Book): void{
        let noCopy: boolean = true;
        for(let i = 0; i< this.bookShelf.length; i++){
            if(this.bookShelf[i] === book){
                noCopy = false;
            }
        }
        if(noCopy){
            this.bookShelf.push(book);
        }
        this.sortLibrary();
    }
    removeBook(title: string): Book{
        let index: number;
        let result: Book;
        for(let i = 0; i < this.bookShelf.length; i++){
            if(this.bookShelf[i].title === title){
                index = i;
                result = this.bookShelf[i];
            }
        }
        if(index !== undefined){
            this.bookShelf.splice(index,1);
            return result;
        }
    }
    editBook(title: string): void{

    }
    searchForBook(title: string): boolean{
        let found: boolean = false;
        for(let i = 0; i < this.bookShelf.length; i++){
            if(this.bookShelf[i].title === title){
                found = true;
            }
        }
        return found;
    }
    sortLibrary(sortParam?: SortType):void{
        // let sortTerm;
        // switch(sortParam){
        //     case SortType.title:
        //         sortTerm =
        // }
        for(let y = 0; y < this.bookShelf.length-1; y++) {
            let lowest: string = this.bookShelf[y].title;
            let temp: Book;
            let initial: number;
            let newPlace: number = y;
            for (let i = y; i < this.bookShelf.length; i++) {
                if (this.bookShelf[i].title < lowest) {
                    initial = i;
                    temp = this.bookShelf[i];
                }
            }
            if(initial !== undefined){
                this.bookShelf[initial] = this.bookShelf[newPlace];
                this.bookShelf[newPlace] = temp;
            }
        }
    }
}

let gatsby: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    yearOfPublication: 1925,
    originalLanguage: BookLanguage.English,
    genre: BookGenre.historicalFiction,
    readBefore: true,
    bookCover: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780743273565/the-great-gatsby-9780743273565_hr.jpg"
    // originalTitle: 'The Great Gatsby'
};
let lostTime: Book = {
    title: 'In Search of Lost Time',
    author: 'Marcel Proust',
    yearOfPublication: 1908,
    originalLanguage: BookLanguage.French,
    genre: BookGenre.modernLiterature,
    pageNum: 4215,
    originalTitle: 'À la recherche du temps perdu',
    readBefore: false,
    bookCover: "https://images-na.ssl-images-amazon.com/images/I/51tRkYYlpaL.jpg"
};
let donQuixote: Book = {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    yearOfPublication: 1615,
    originalTitle: 'El Ingenioso Hidalgo Don Quijote de la Mancha',
    genre: BookGenre.novel,
    originalLanguage: BookLanguage.Spanish,
    readBefore: false,
    bookCover: "https://images-na.ssl-images-amazon.com/images/I/41JKGW9P6AL._SX372_BO1,204,203,200_.jpg"
};
let ulysses: Book = {
    title: 'Ulysses',
    author: 'James Joyce',
    yearOfPublication: 1922,
    pageNum: 730,
    readBefore: false,
    originalLanguage: BookLanguage.English,
    bookCover: "https://upload.wikimedia.org/wikipedia/commons/a/ab/JoyceUlysses2.jpg"
};
let hamlet: Book = {
    title: 'Hamlet',
    author: 'William Shakespeare',
    genre: BookGenre.play,
    readBefore: true,
    yearOfPublication: 1603,
    originalLanguage: BookLanguage.English,
    bookCover: "data:image/jpeg;base64,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"
};
let warPeace: Book = {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    yearOfPublication: 1867,
    pageNum: 1225,
    originalTitle: 'Война и миръ',
    readBefore: false,
    originalLanguage: BookLanguage.Russian,
    bookCover: "https://images-na.ssl-images-amazon.com/images/I/51GcIO0ciHL.jpg"
};
let odyssey: Book = {
    title: 'Odyssey',
    author: 'Homer',
    genre: BookGenre.epicPoetry,
    originalLanguage: BookLanguage.AncientGreek,
    readBefore: false,
    bookCover: "https://images-na.ssl-images-amazon.com/images/I/51FR8mSgqoL._SX346_BO1,204,203,200_.jpg"
};
let nineteen: Book = {
    title: '1984',
    author: 'George Orwell',
    yearOfPublication: 1949,
    pageNum: 328,
    originalLanguage: BookLanguage.English,
    readBefore: false,
    bookCover: "http://flavorwire.files.wordpress.com/2011/06/photo.jpeg"
};


let jacobsLibrary = new Libray();
jacobsLibrary.addBook(gatsby);
jacobsLibrary.addBook(nineteen);
jacobsLibrary.addBook(odyssey);
jacobsLibrary.addBook(warPeace);
jacobsLibrary.addBook(hamlet);
jacobsLibrary.addBook(ulysses);
jacobsLibrary.addBook(donQuixote);
jacobsLibrary.addBook(lostTime);
console.log(jacobsLibrary.searchForBook('The Great Gatsby'));

function createTitle(title: string): string{
    return `<h2>${title}</h2>`;
}
function createAuthor(author: string):string{
    return `<h3>${author}</h3>`;
}
function createPubYear(pubYear: number): string{
    return `<p>Published: ${pubYear}</p>`;
}
function createOLang(language: BookLanguage): string{
    switch(language){
        case BookLanguage.English:
            return `<p>Original Language: English</p>`;
        case BookLanguage.AncientGreek:
            return `<p>Original Language: Ancient Greek</p>`;
        case BookLanguage.Russian:
            return `<p>Original Language:Russian</p>`;
        case BookLanguage.Spanish:
            return `<p>Original Language: Spanish</p>`;
        case BookLanguage.French:
            return `<p>Original Language: French</p>`;
    }
}
function createOTitle(oTitle: string): string{
    return `<p>Original Title: ${oTitle}</p>`;
}
function createGenre(genre: BookGenre): string{
    switch(genre){
        case BookGenre.epicPoetry:
            return `<p>Genre: Epic Poetry</p>`;
        case BookGenre.play:
            return `<p>Genre: Play</p>`;
        case BookGenre.novel:
            return `<p>Genre: Novel</p>`;
        case BookGenre.modernLiterature:
            return `<p>Genre: Modern Literature</p>`;
        case BookGenre.historicalFiction:
            return `<p>Genre: Historical Fiction</p>`;
    }
}
function createHasRead(read: boolean): string{
    if(read){
        return `<p>Jacob has read this book!</p>`;
    }
    else{
        return `<p>Jacob has not read this yet</p>`;
    }
}
function createPageNum(num: number):string{
    return `<p>Number of pages: ${num}</p>`;
}

function drawPage(bookshelf: Book[]):void{
    let result: string = "";
    for (let i = 0; i < bookshelf.length; i++){
        let title: string = createTitle(bookshelf[i].title);
        let author: string = createAuthor(bookshelf[i].author);
        let pubYear: string = (bookshelf[i].yearOfPublication ? createPubYear(bookshelf[i].yearOfPublication) : "");
        let pageNum: string = (bookshelf[i].pageNum ? createPageNum(bookshelf[i].pageNum): "");
        let genre: string = (bookshelf[i].genre ? createGenre(bookshelf[i].genre): "");
        let oTitle: string = (bookshelf[i].originalTitle ? createOTitle(bookshelf[i].originalTitle): "");
        let oLang: string = createOLang(bookshelf[i].originalLanguage);
        let hasRead: string = createHasRead(bookshelf[i].readBefore);
        result += `<div id="${bookshelf[i].title}" class="book">${title}${author}${pubYear}${oLang}${oTitle}${genre}${pageNum}${hasRead}</div>`;
    }
    bookshelfDOM.innerHTML = result;
    // for (let y = 0; y < document.getElementsByClassName('book').length; y++){
    //     document.getElementsByClassName('book')[y].style.backgroundImage = `url()`;
    // }
}
drawPage(jacobsLibrary.bookShelf);
