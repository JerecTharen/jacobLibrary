let bookshelfDOM = document.getElementsByClassName('containsAll')[0];
var BookGenre;
(function (BookGenre) {
    BookGenre[BookGenre["historicalFiction"] = 0] = "historicalFiction";
    BookGenre[BookGenre["modernLiterature"] = 1] = "modernLiterature";
    BookGenre[BookGenre["novel"] = 2] = "novel";
    BookGenre[BookGenre["play"] = 3] = "play";
    BookGenre[BookGenre["epicPoetry"] = 4] = "epicPoetry";
})(BookGenre || (BookGenre = {}));
var BookLanguage;
(function (BookLanguage) {
    BookLanguage[BookLanguage["English"] = 0] = "English";
    BookLanguage[BookLanguage["French"] = 1] = "French";
    BookLanguage[BookLanguage["Russian"] = 2] = "Russian";
    BookLanguage[BookLanguage["Spanish"] = 3] = "Spanish";
    BookLanguage[BookLanguage["AncientGreek"] = 4] = "AncientGreek";
})(BookLanguage || (BookLanguage = {}));
var SortType;
(function (SortType) {
    SortType[SortType["title"] = 0] = "title";
    SortType[SortType["author"] = 1] = "author";
    SortType[SortType["pubYear"] = 2] = "pubYear";
    SortType[SortType["pageNum"] = 3] = "pageNum";
    SortType[SortType["oLang"] = 4] = "oLang";
    SortType[SortType["genre"] = 5] = "genre";
    SortType[SortType["originalTitle"] = 6] = "originalTitle";
})(SortType || (SortType = {}));
class Libray {
    constructor() {
        this.bookShelf = [];
    }
    addBook(book) {
        let noCopy = true;
        for (let i = 0; i < this.bookShelf.length; i++) {
            if (this.bookShelf[i] === book) {
                noCopy = false;
            }
        }
        if (noCopy) {
            this.bookShelf.push(book);
        }
        this.sortLibrary();
    }
    removeBook(title) {
        let index;
        let result;
        for (let i = 0; i < this.bookShelf.length; i++) {
            if (this.bookShelf[i].title === title) {
                index = i;
                result = this.bookShelf[i];
            }
        }
        if (index !== undefined) {
            this.bookShelf.splice(index, 1);
            return result;
        }
    }
    editBook(title) {
    }
    searchForBook(title) {
        let found = false;
        for (let i = 0; i < this.bookShelf.length; i++) {
            if (this.bookShelf[i].title === title) {
                found = true;
            }
        }
        return found;
    }
    sortLibrary(sortParam) {
        // let sortTerm;
        // switch(sortParam){
        //     case SortType.title:
        //         sortTerm =
        // }
        for (let y = 0; y < this.bookShelf.length - 1; y++) {
            let lowest = this.bookShelf[y].title;
            let temp;
            let initial;
            let newPlace = y;
            for (let i = y; i < this.bookShelf.length; i++) {
                if (this.bookShelf[i].title < lowest) {
                    initial = i;
                    temp = this.bookShelf[i];
                }
            }
            if (initial !== undefined) {
                this.bookShelf[initial] = this.bookShelf[newPlace];
                this.bookShelf[newPlace] = temp;
            }
        }
    }
}
let gatsby = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    yearOfPublication: 1925,
    originalLanguage: BookLanguage.English,
    genre: BookGenre.historicalFiction,
    readBefore: true,
};
let lostTime = {
    title: 'In Search of Lost Time',
    author: 'Marcel Proust',
    yearOfPublication: 1908,
    originalLanguage: BookLanguage.French,
    genre: BookGenre.modernLiterature,
    pageNum: 4215,
    originalTitle: 'À la recherche du temps perdu',
    readBefore: false
};
let donQuixote = {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    yearOfPublication: 1615,
    originalTitle: 'El Ingenioso Hidalgo Don Quijote de la Mancha',
    genre: BookGenre.novel,
    originalLanguage: BookLanguage.Spanish,
    readBefore: false
};
let ulysses = {
    title: 'Ulysses',
    author: 'James Joyce',
    yearOfPublication: 1922,
    pageNum: 730,
    readBefore: false,
    originalLanguage: BookLanguage.English
};
let hamlet = {
    title: 'Hamlet',
    author: 'William Shakespeare',
    genre: BookGenre.play,
    readBefore: true,
    yearOfPublication: 1603,
    originalLanguage: BookLanguage.English
};
let warPeace = {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    yearOfPublication: 1867,
    pageNum: 1225,
    originalTitle: 'Война и миръ',
    readBefore: false,
    originalLanguage: BookLanguage.Russian
};
let odyssey = {
    title: 'Odyssey',
    author: 'Homer',
    genre: BookGenre.epicPoetry,
    originalLanguage: BookLanguage.AncientGreek,
    readBefore: false,
};
let nineteen = {
    title: '1984',
    author: 'George Orwell',
    yearOfPublication: 1949,
    pageNum: 328,
    originalLanguage: BookLanguage.English,
    readBefore: false
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
function createTitle(title) {
    return `<h2>${title}</h2>`;
}
function createAuthor(author) {
    return `<h3>${author}</h3>`;
}
function createPubYear(pubYear) {
    return `<p>Published: ${pubYear}</p>`;
}
function createOLang(language) {
    switch (language) {
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
function createOTitle(oTitle) {
    return `<p>Original Title: ${oTitle}</p>`;
}
function createGenre(genre) {
    switch (genre) {
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
function createHasRead(read) {
    if (read) {
        return `<p>Jacob has read this book!</p>`;
    }
    else {
        return `<p>Jacob has not read this yet</p>`;
    }
}
function createPageNum(num) {
    return `<p>Number of pages: ${num}</p>`;
}
function drawPage(bookshelf) {
    let result = "";
    for (let i = 0; i < bookshelf.length; i++) {
        let title = createTitle(bookshelf[i].title);
        let author = createAuthor(bookshelf[i].author);
        let pubYear = (bookshelf[i].yearOfPublication ? createPubYear(bookshelf[i].yearOfPublication) : "");
        let pageNum = (bookshelf[i].pageNum ? createPageNum(bookshelf[i].pageNum) : "");
        let genre = (bookshelf[i].genre ? createGenre(bookshelf[i].genre) : "");
        let oTitle = (bookshelf[i].originalTitle ? createOTitle(bookshelf[i].originalTitle) : "");
        let oLang = createOLang(bookshelf[i].originalLanguage);
        let hasRead = createHasRead(bookshelf[i].readBefore);
        result += `<div id="${bookshelf[i].title}" class="book">${title}${author}${pubYear}${oLang}${oTitle}${genre}${pageNum}${hasRead}</div>`;
    }
    bookshelfDOM.innerHTML = result;
}
drawPage(jacobsLibrary.bookShelf);
