var mongoose=require('mongoose');
var mongoose = 'mongodb://127.0.0.1/products';
const mongoDB = 'mongodb://localhost:27017/products';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db=mongoose.connection;
db.on('error',console.error.bind(console,"mongoDB connection error"));

var productionSchema=mongoose.schema({
    pid:Number,
    name:String,
    description:String,
    price:Number,
    category:String
});

var product = mongoose.model('product',producrtSchema,'crud');
var mongoose=require('mongoose');
 
const fastify=require('fastify')({logger:true})
const PORT=3000

fastify.get('/hello',(req,resp)=>{
    resp.send({'hello':'world'});
})

//API
fastify.get('/products',(req,resp)=>{
    result=crud.find().lean().select("pid name description,categroy").exec(function(err,result){
        resp.send(result);
    })
})

fastify.get('/products/:pid',(req,resp)=>{
    result=crud.find().lean().select("pid name description,categroy").exec(function(err,result){
        resp.send(result);
    })

})
const start = async()=>{
    try{
        await fastify.listen(PORT)
    }catch(error){
        fastify.log.error(error)
        process.exit(1)
    }
}

start()