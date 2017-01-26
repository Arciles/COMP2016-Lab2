/**
 * Created by esattahaibis on 2017-01-26.
 */
const connect = require('connect');
const url = require('url');
const app = connect();

app.use('/lab2', function (req, res, next) {

    // get the full query string
    let query = url.parse(req.url, true).query;

    if(query.method === 'add'){
        // do addition

    } else if(query.medhod === 'subtract'){
        // do subtraction

    } else if(query.medhod === 'multiply'){
        // do multiplication

    } else if(query.medhod === 'divide') {
        // do division

    } else {
        // wrong parameter display something went wrong page
    }

});

app.listen(process.env.PORT || 3000);
console.log('App is serving at the port 3000');