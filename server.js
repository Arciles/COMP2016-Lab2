/**
 * Created by esattahaibis on 2017-01-26.
 */
const connect = require('connect');
const url = require('url');
const app = connect();

app.use('/lab2', function (req, res, next) {

    // get the full query string
    let query = url.parse(req.url, true).query;
    let total = 0;
    if(query.method === 'add'){
        // do addition
        total = parseFloat(query.x) + parseFloat(query.y);
    } else if(query.method === 'subtract'){
        // do subtraction
        total = parseFloat(query.x) - parseFloat(query.y);
    } else if(query.method === 'multiply'){
        // do multiplication
        total = parseFloat(query.x) * parseFloat(query.y);
    } else if(query.method === 'divide') {
        // do division
        total = parseFloat(query.x) / parseFloat(query.y);
    } else {
        // wrong parameter display something went wrong page
    }
    res.end(`
            <h1>Calculator</h1>
            <p>First param: ${query.x}</p>
            <p>Second param: ${query.y}</p>
            <p>Total: ${total}</p>`)
});

app.use('/', function (req, res, next) {
    res.end(`<h1>Welcome to super awesome calculator site on the Galaxy</h1>
             <p>Some test links for you
             <a href="http://localhost:3000/lab2?method=add&x=16&y=4">16+4</a>
             <br>
             <a href="http://localhost:3000/lab2?method=subtract&x=16&y=4">16-4</a>
             <br>
             <a href="http://localhost:3000/lab2?method=multiply&x=16&y=4">16*4</a>
             <br>
             <a href="http://localhost:3000/lab2?method=divide&x=16&y=4">16/4</a></p>`)
})
app.listen(process.env.PORT || 3000);
console.log('App is serving at the port 3000');