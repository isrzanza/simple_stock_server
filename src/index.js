//Simple stocks local server

const http = require("http")
const db = require("./fakeDb")
const host = 'localhost'
const port = 8000

const stocksString = JSON.stringify(db.stocksJson)

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json")
    switch(req.url){
        case "/stocks" : {
            res.writeHead(200);
            res.end(stocksString);
            break
        }

        
        default : {
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
        }
    }
}

const server = http.createServer(requestListener)

server.listen(port,host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})