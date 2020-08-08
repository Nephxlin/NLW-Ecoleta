// importar a dependencia do sqlite 3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar o objeto de bando de dados, para nossas operações

/*db.serialize(() =>{
    //criar uma tabela com comandos sql
    
    //1-criar uma tabela
    /*db.run(`
        CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //2 - inserir dados na tabela
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]
    
    function afterInsertData(err) {
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }
    db.run(query, values, afterInsertData)
        
    //3 - consultar os dados da tabela
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }
    
        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })


    //4 - deletar um dado da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
        if(err) {
            return console.log(err)
        }
    
        console.log("Registro deletado com sucesso!")
    })   
 

})*/