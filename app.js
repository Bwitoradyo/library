var express = require('express');
var bookRouter = require('./src/routes/bookRoutes.js')

var app = express();

var port = 5000;








app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');



app.use('/Books', bookRouter);





app.get('/', function (req, res) {
    res.render('index', {
        title:"Hello from render",
        nav: [{
                Link:'/Books',
                Text:'Books'
              },
              {
                  Link:'/Authors',
                  Text:'Authors'
               }]
    });
});

app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log("Server is running on port : " + port);
})

