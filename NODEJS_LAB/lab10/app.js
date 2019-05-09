// npm install pug

const express = require('express');
const app = express();

// server.get('/podatek/:podatek/:kwota', (req,res)=>{
//     //req.params: { "userId": "12", "postId": "44" }
//     const {podatek,kwota}= req.params
//     const result = calcTax(podatek,kwota);
//     res.send(200, result);// trzeba zakończyć zawsze

// })
// server.listen(4500,()=>console.log('server started'))

app.set('view engine', 'pug');

app.get('/:name', function (req, res) {
    const {name} = req.params;
    const scope = {title: 'greeting', header: 'hello ' + name};
    res.render('index', scope);
});

app.listen(4000, () => console.log('start server'));