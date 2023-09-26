function generate(){
    var quotes = {
        "- Albert Camus" : '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
        "- Alb Leo" : '"A man without ethics is a wild beast loosed upon this world."',
        "- Dalai Lama" : '"Our prime purpose in this life is to help others. And if you can\'t help them, at least don\'t hurt them."',
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}

