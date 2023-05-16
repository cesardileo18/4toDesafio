import express from 'express'
import apiProds from './routes/products.router.js'
import apiCarts from './routes/carts.router.js'

const app = express()
const PORT = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Implementacion de Router
app.use('/api/products', apiProds)
app.use('/api/carts', apiCarts)

export const server = app.listen(PORT , (req, res) => {
    console.log(`puerto ${PORT}`);
})