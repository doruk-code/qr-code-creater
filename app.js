const express = require('express')
const app = express()
const port = 3000
const qr = require('qrcode')

let data = {}


//HTML elemtents to be rendered
app.get('/', (req, res) => {


   


    var link = req.query.link

    
    qr.toDataURL(link, (err, src) => {
        res.send(`
        <h1>QR Code Generator</h1>
        <form method="GET">
            

            <input type="link" name="link" placeholder="Enter text to be converted to QR Code">
            <button type="submit">Generate QR Code</button>
        </form>
        <img src="${src}">
        `)

    })
})


let stJson = JSON.stringify(data);
qr.toFile('qr.png', stJson, function (err, code) {
    
}

)



app.listen(port, () => {
  console.log(`Çalıştığı ${port} Portu`)
})

