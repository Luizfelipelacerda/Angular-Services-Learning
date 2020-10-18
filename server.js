const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.static(__dirname + '/dist/my-first-app'));

app.get('/*', (req, res)=>{
    res.sendFile(__dirname + '/dist/my-first-app/index.html');
});

app.listen(PORT, ()=>{
    console.log('servidor Iniciado na porta '+ PORT);
})