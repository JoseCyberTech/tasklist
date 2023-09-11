import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nodemvc', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
})

try {
        
        sequelize.authenticate();
        console.log('Conectamos ao MySQL!')

} catch (err) {
        console.log(`Não foi possível conectar: ${err}`)
}

export default sequelize;