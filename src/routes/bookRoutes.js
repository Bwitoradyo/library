var express = require('express');

var bookRouter = express.Router();

var router = function (nav) {

    var books = [
        {
            title:'War and Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolayevich Tolstoy',
            read: false
        },
        {
            title:'Useful Sites for Designers',
            genre: 'Non Fiction',
            author: 'Pinokio',
            read: false
        },
        {
            title:'War and Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolayevich Tolstoy',
            read: false
        },
        {
            title:'War and Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolayevich Tolstoy',
            read: false
        },
        {
            title:'War and Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolayevich Tolstoy',
            read: false
        }
    ];

    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView', {
                title:"Books",
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title:"Books",
                nav: nav,
                book: books[id]
            });

        });

    return  bookRouter;

}

module.exports = router;