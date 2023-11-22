require("dotenv").config(); //5.7k (gzipped: 2.6k)

const express = require("express");

const app = express();

const bd = require('./bd')

app.use(express.json());

//app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

app.listen(process.env.PORT, () =>{
    console.log("App is running server nodejs");
});





app.get("/Professor", async(req,res)=> {
    const results = await bd.consultaProfessores();
    res.json(results);
}
);

app.get("/Alunos", async(req,res)=> {
    const results = await bd.consultaAlunos();
    res.json(results);
}
);

app.get("/Escola", async(req,res)=> {
    const results = await bd.consultaEscola();
    res.json(results);
}
);

app.get("/Curso", async(req,res)=> {
    const results = await bd.consultaCurso();
    res.json(results);
}
);

app.get("/Matricula", async(req,res)=> {
    const results = await bd.consultaMatricula();
    res.json(results);
}
);

// PROFESSOR
 app.post('/Professor', async(req,res)=>{
    await bd.inserirProfessor(req.body.nome, req.body.cpf, req.body.formacao, req.body.salario);
    res.sendStatus(201);
 });

app.delete('/Professor/:id', async (req, res) =>{
    await bd.excluirProfessor(parseInt(req.params.id));
    res.sendStatus(201);
});

app.patch('/Professor', async(req, res) => {
    await bd.atualizarProfessor(req.body.idProfessor, req.body.nome, req.body.cpf, req.body.formacao, req.body.salario);
    res.sendStatus(201);
});

// ALUNO

app.post('/Aluno', async(req,res)=>{
    await bd.inserirAluno(req.body.nome, req.body.cpf, req.body.salario, req.body.cidade, req.body.estado, req.body.endereco );
    res.sendStatus(201);
 });

app.delete('/Aluno/:id', async (req, res) =>{
    await bd.excluirAluno(parseInt(req.params.id));
    res.sendStatus(201);
});

app.patch('/Aluno', async(req, res) => {
    await bd.atualizarAluno(req.body.idProfessor, req.body.nome, req.body.cpf,req.body.salario, req.body.cidade, req.body.estado, req.body.endereco);
    res.sendStatus(201);
});

// ESCOLA


app.post('/Escola', async(req,res)=>{
    await bd.inserirAluno(req.body.nome, req.body.cnpj, req.body.cidade, req.body.estado, req.body.endereco );
    res.sendStatus(201);
 });

app.delete('/Escola/:id', async (req, res) =>{
    await bd.excluirAluno(parseInt(req.params.id));
    res.sendStatus(201);
});

app.patch('/Escola', async(req, res) => {
    await bd.atualizarAluno(req.body.idEscola, req.body.nome, req.body.cnpj, req.body.cidade, req.body.estado, req.body.endereco);
    res.sendStatus(201);
});

// CURSO

app.post('/Curso/:id', async(req,res) => {
    await bd.inserirCurso(req.body.nome, req.body.ementa, req.body.carga_horaria)
})

app.delete('/Curso/:id', async(req,res) => {
    await bd.excluirCurso(parseInt(req.params.id));
    res.sendStatus(201);
})

app.patch ('/Curso/:id', async(req,res) => {
    await bd.atualizarCurso(req.body.nome, req.body.ementa, req.body.carga_horaria)
    res.sendStatus(201);
})


