const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dados = require('./db.json');

app.use(bodyParser.json());

app.get('/livros', (req, res) => {
    res.send(dados.livros);
});

app.get('/livros/:id', (req,res)=>{
    const livro = dados.livros.filter((elemento)=>{
        if(elemento.id == req.params.id){
            return true;
        }
        else{
            return false;
        }
    });
    res.send(...livro);
});

/*app.get('/nome', (req, res) =>{
    res.send('gabriel')
});*/
//localhost:3000/nome

app.post('/livros', (req,res) =>{
    res.send('Livros cadastrado com sucesso ' + req.body.titulo);
});

app.put('/livros/:id', (req, res) =>{
    res.send('Livro atualizado com sucesso');
});

app.delete('/livros/:id', (req,res) =>{
    res.send('Livro apagado com sucesso');
});

app.listen(3000);