const { config } = require('dotenv')
const { resolve } = require('path')

config()

module.exports = [
  {
    type: 'postgres',
    host: 'localhost',
    port: '5432',
    database: process.env.DATABASE,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    entities: [resolve(__dirname, 'js', 'entities', '*.js')]
  }
]
