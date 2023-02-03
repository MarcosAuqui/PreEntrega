 import express from 'express'

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended:true}))

const products =[
    {nombre: 'producto1', id:'1', description: 'este es un producto 1'},
    {nombre: 'producto2', id:'2', description: 'este es un producto 2'},
    {nombre: 'producto3', id:'3', description: 'este es un producto 3'},
    {nombre: 'producto4', id:'4', description: 'este es un producto 4'},
    {nombre: 'producto5', id:'5', description: 'este es un producto 5'},
    {nombre: 'producto6', id:'6', description: 'este es un producto 6'},
    {nombre: 'producto7', id:'7', description: 'este es un producto 7'},
    {nombre: 'producto8', id:'8', description: 'este es un producto 8'},
    {nombre: 'producto9', id:'9', description: 'este es un producto 9'}
]
/* Traemos todos los productos */
app.get('/products',(req, res)=>{
    console.log(req.query)
    const {limit} = req.query
    const listado =  products.slice(0, limit)
    res.send(listado)
})

/* Filtramos por id */
app.get('/products/:id',(req, res)=>{
    const {id} = req.params
    const product = products.find(idProduct => idProduct.id === id)
    if(!product){
        return res.send(`No existe el producto con el ID ${id}`)
    }
    res.send(product)
})

/* app.get('/products', (req, res)=>{
    console.log(req.products)
    const {limit} = req.products
    res.send({
        limit
    })
}) */


/* clase 7 */

/* app.get('/query', (req, res)=>{
    console.log(req.query)
    res.send(`query`)
}) */

app.listen(PORT, err=>{
    if (err) console.log(err)
    console.log(`Escuchando en el puerto en el puerto ${PORT}`)
})