const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname+'./database.sqlite'
})

const Produto = sequelize.define('produto',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: true
    },
})


try {
    const resultado = await sequelize.sync();
    console.log(resultado);

    const resultadoCreate = await Produto.create({
        nome: 'mouse',
        preco: 10,
        descricao: 'Um mouse USB bonitão'
    })
    console.log(resultadoCreate);
} catch (error) {
    console.log(error);
}