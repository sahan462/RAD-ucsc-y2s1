const http = require("http");

app.use(cors({
    credentials:true,
    origin:'http://localhost:3000',
}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const server = http.createServer((req, res)=>{
    if(req.url === '/q1'){
        res.end('Welcome to our home page');
        const {num1, num2} = req.body;
        console.log(num1);
        console.log(num2);
    }
    else if(req.url === '/q2'){
        res.end('Here is our short history')
    }else {
        res.end('<h1> oops </h1>')
    }
})

server.listen(5000, ()=>{
    console.log("Server is listening on port 5000");
});