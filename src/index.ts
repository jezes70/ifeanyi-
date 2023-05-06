// import express from 'express'
// import logger from "morgan"
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import { ApolloServer } from 'apollo-server'
import typeDefs from './Graphql/type-def'
import resolvers from './Graphql'


// const app = express();
// app.use(logger('dev'))

const server = new ApolloServer({
    typeDefs,
    resolvers

})

mongoose.connect(process.env.DATABASE_URL!)
    .then(() => {
        console.log(`Database connected 
    successfully`)
    }).catch(err => {
        console.log(err)
    })

const Port = 4001

server.listen(Port, () => {
    console.log(`Sever running on http:
  //localhost:${Port}`)
})