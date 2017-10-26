var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

// view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

var users =
[
{
  id:1,
  first_name:'jhon',
  last_name:'krisha',
  email:'chaitu15@gmail.com'

},
{
  id:2,
  first_name:'madhu',
  last_name:'krishna',
  email:'chaitu15@gmail.com'

},
{
  id:3,
  first_name:'srav',
  last_name:'krisha',
  email:'chaitu5@gmail.com'

}

]


app.get('/',function(req,res){

    res.render('index',{
      title:'customers',
      users: users
    }
)});


app.listen(3000,function()
{
  console.log('server started on port 3000...')
}
)
