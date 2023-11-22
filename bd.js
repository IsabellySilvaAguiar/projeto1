require("dotenv").config();

async function connect(){
    const mysql = require("mysql2/promise"); 
    const conexao = mysql.createPool (process.env.CONNECTION_STRING); 
    return conexao;
    }

    async function consultaProfessores(){
        const conn = await connect(); 
        const result = await conn.query("select * from Professor;"); 
        return (result[0]);
        }

    

    async function consultaAlunos(){
        const conn = await connect(); 
        const result = await conn.query("select * from Aluno;"); 
        return (result[0]);
        }

    

    async function consultaEscola(){
        const conn = await connect(); 
        const result = await conn.query("select * from Escola;"); 
        return (result[0]);
        }

   

    async function consultaCurso(){
        const conn = await connect(); 
        const result = await conn.query("select * from Curso;"); 
        return (result[0]);
        }


    async function consultaMatricula(){
        const conn = await connect(); 
        const result = await conn.query("select * from Matricula;"); 
        return (result[0]);
        }

        async function inserirProfessor(nome,cpf, formacao, salario){
            const conn = await connect();
            const values = [nome, cpf, formacao, salario];
            await conn.query('insert into Professor(nome, cpf, formacao, salario) values (?,?,?,?)', values);
        }

    async function excluirProfessor(id){
            const conn = await connect();
            await conn.query('delete from Professor where idProfessor=?', id);
        }
    
    async function atualizarProfessor(id, nome, cpf, formacao, salario){
            const conn = await connect();
            const values =  [nome, cpf, formacao, salario, id];
            await conn.query('update professor set nome=?, cpf=?, formacao=?, salario=? where idProfessor=?', values);
        }

        // ALUNO
    async function inserirAluno(nome,cpf, salario, cidade, estado, endereco){
            const conn = await connect();
            const values = [nome, cpf,  salario, cidade, estado, endereco];
            await conn.query('insert into Aluno(nome, cpf,  salario, cidade, estado, endereco) values (?,?,?,?,?,?)', values);
        }

        async function excluirAluno(id){
            const conn = await connect();
            await conn.query('delete from Aluno where idAluno=?', id);
        }
    
    async function atualizarAluno(id, nome, cpf, salario, cidade, estado, endereco){
            const conn = await connect();
            const values =  [nome, cpf,  salario, id, cidade, estado, endereco];
            await conn.query('update professor set nome=?, cpf=?,  salario=? cidade=?, estado=?, endereco=? where idAluno=?', values);
        }

        // ESCOLA
    
        async function inserirEscola(nome,cnpj, cidade, estado, endereco){
            const conn = await connect();
            const values = [nome, cnpj, cidade, estado, endereco];
            await conn.query('insert into Escola(nome, cnpj, cidade, estado, endereco) values (?,?,?,?,?)', values);
        }

        async function excluirEscola(id){
            const conn = await connect();
            await conn.query('delete from Escola where idEscola=?', id);
        }
    
    async function atualizarEscola(id, nome, cnpj, cidade, estado, endereco){
            const conn = await connect();
            const values =  [nome, cnpj, id, cidade, estado, endereco];
            await conn.query('update professor set nome=?, cnpj=?,  cidade=?, estado=?, endereco=? where idEscola=?', values);
        }

        // CURSO

        async function excluirCurso(id){
            const conn = await connect();
            await conn.query('delete from Curso where idCurso = ?', [id]);
        }
        
        async function atualizarCurso(nome, ementa, carga_horaria, idProfessor, idEscola, idCurso){
            const conn = await connect();
            const values = [nome, ementa, carga_horaria, idProfessor, idEscola, idCurso];
            await conn.query('update Curso set nome=?, ementa=?, carga_horaria=?, Professor_idProfessor=?, Escola_idEscola=? where idCurso=?', values);
        }
        
        async function inserirCurso(nome, ementa, carga_horaria, idProfessor, idEscola){
            const conn = await connect();
            const values = [nome, ementa, carga_horaria, idProfessor, idEscola];
            await conn.query('insert into Curso(nome, ementa, carga_horaria, Professor_idProfessor, Escola_idEscola) values (?, ?, ?, ?, ?)', values);
        }

        // MATRICULA

        // async function excluirMatricula(id){
        //     const conn = await connect();
        //     await conn.query('delete from Matricula where idMatricula = ?', [id]);
        // }
        
        // async function atualizarMatricula(ano_matricula, idProfessor, idEscola, idCurso, idAluno){
        //     const conn = await connect();
        //     const values = [ idProfessor, idEscola, idCurso,ano_matricula,idAluno];
        //     await conn.query('update Curso set  idAluno=?, ano_matricula=?, Professor_idProfessor=?, Escola_idEscola=? where idMatricula=?', values);
        // }
        
        // async function inserirMatricula(idProfessor, idEscola, idAluno,ano_matricula){
        //     const conn = await connect();
        //     const values = [nome, ementa, carga_horaria, idProfessor, idEscola];
        //     await conn.query('insert into Curso(nome, ementa, carga_horaria, Professor_idProfessor, Escola_idEscola) values (?, ?, ?, ?, ?)', values);
        // }

    module.exports = {
        consultaMatricula,
        consultaProfessores,
        consultaAlunos,
        consultaEscola,
        consultaCurso,
        inserirProfessor,
        excluirProfessor,
        atualizarProfessor,
        inserirAluno,
        excluirAluno,
        atualizarAluno,
        inserirEscola,
        excluirEscola,
        atualizarEscola,
        inserirCurso,
        excluirCurso,
        atualizarCurso

    }

   
