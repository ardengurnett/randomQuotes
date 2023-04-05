//Object with random quotes
let randomQuotes = {
    motivational: ['“We cannot solve problems with the kind of thinking we employed when we came up with them.”', '"It is better to fail in originality than to succeed in imitation."', '“Experience is a hard teacher because she gives the test first, the lesson afterwards.”', '“Alone we can do so little, together we can do so much.”'],
    sad: ['“So it is true, when all is said and done, grief is the price we pay for love.”', '“To have felt too much is to end in feeling nothing.”', '“There is one pain, I often feel, which you will never know. It is caused by the absence of you.”', '“Our greatest joy and our greatest pain come in our relationships with others.”', '“There is a distinct, awful pain that comes with loving someone more than they love you.”', '“It is the unknown we fear when we look upon death and darkness, nothing more.”'],
    silly: ['"The older you get, the better you get, unless you are a banana."', '“Clothes make the man. Naked people have little or no influence in society.”', '“Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.”', '“Truth hurts. Maybe not as much as jumping on a bicycle with a seat missing, but it hurts.”', '“I am not insane. My mother had me tested.”']
};




//function that generates random genre, a random property from the randomQuotes object
let randGenre = () => {
    let genreIndex = Math.floor(Math.random() * (((Object.keys(randomQuotes)).length) - 1));//random number between 0 and 2
    let randomQuotesKeys = Object.keys(randomQuotes);//array that has keys as items
    let genre = randomQuotesKeys[genreIndex];//chooses single item from array
    return genre;
}


//generates a random index number depending on what genre is randomly selected
let genreIndex = (genre) => {
    genre = randGenre();
    switch (genre) {
        case 'motivational':
            return Math.floor(Math.random() * 4);
            break;
        case 'sad':
            return Math.floor(Math.random() * 6);
            break;
        case 'silly':
            return Math.floor(Math.random() * 5);
            break;
        default:
            return console.log('invalid');
            break;
    }
}



//generates random quote using randGenre and genreIndex functions
let generateQuote = () => {
    let genre = randGenre();
    switch (genre) {
        case 'motivational':
            console.log(randomQuotes.motivational[genreIndex()]);
            break;
        case 'sad':
            console.log(randomQuotes.sad[genreIndex()]);
            break;
        case 'silly':
            console.log(randomQuotes.silly[genreIndex()]);
        default:
            console.log('invalid');
            break;
    }

    console.log('This is my final quote');
}



generateQuote();
