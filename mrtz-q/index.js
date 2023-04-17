const express = require('express');
const cors = require('cors');
const { Base } = require('deta');
const q = Base('quote');
const app = express();
app.use(express.json());
app.use(cors());

// app.get('/',async(req,res)=>{
//     const quote = "kdhkjsaka";
//     const status = 1;
//     const to ={quote, status}
//     const a = await q.put(to)
//     res.send(a)
// })

app.get('/get',async(req,res)=>{
    const a = await q.fetch()
    res.send(a)
})

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`helloworld: listening on port ${port}`);
});
