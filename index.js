var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express()

app.use(express.static('uploads'));
app.set('view engine', 'ejs');

const port = process.env.PORT || 8080;

app.post('/upload', upload.single('image'), function (req, res, next) {
  res.redirect(`/?image=${req.file.filename}`)
})

app.get('/', function (req, res) {
  res.render('index', {image: req.query.image});
})

const server = app.listen(port, () => {
  console.log(`started port ${port}`)
});