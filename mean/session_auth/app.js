var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);
var user=require('./models/UserSchema')
var importData= require('./models/importSchema')
var leadsData= require('./models/leadSchema')
var customers=require('./models/fileSchema')
var config = require('./config/config');
const csv=require('csvtojson')
const port = 3000

var publicdir = require('path').join(__dirname, '/public');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect(config.database);


app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: config.db,
    ttl: 60*60,
    autoRemove: 'interval',
    autoRemoveInterval: 30
  })
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/index', (req, res) => res.render('index',{ title: 'app' }));

app.get('/login',(req, res) => res.render('login'))
app.get('/csvFile',(req, res) => res.render('csvcheck'))


// app.get('/home',(req, res) => res.render('home'))



app.post('/loginauth',(req, res) => {
  console.log(req.body)
  if(req.body.UserID&&req.body.Password){
    console.log(req.body);
    user.findOne({ UserID: req.body.UserID}, function (err, userd) {
      console.log(userd);
      if(err){
      res.send("failure");
      }
      else{
        if(userd.Password==req.body.Password){
          req.session.userId = userd._id;
          res.send("Sucess")       }
        else{
          console.log(obj.Password)
          res.send("password not same");
        }
      }
    });
  }
});


app.use('/api', function (req, res, next) {
  user.findById(req.session.userId)
    .exec(function (error, userd) {
      if (error) {
        return next(error);
      } else {
        if (userd === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        } else {
            console.log("middle");
            next();
          // return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
        }
      }
    });
});


app.put('/api/AddUser',(req, res) => {
  if(req.body.UserName&&req.body.UserID&&req.body.Password)
  {
    var userData = new user({
      UserName: req.body.UserName,
      UserID: req.body.UserID,
      Password: req.body.Password,
    });
    userData.save(function(err,userd){
      if(err){
        res.send("failure");
      }
      else{
            res.send("Sucess");
      }
    })
    }
  });
/**
 * delete api
 */
app.delete("/api/deleteUser", (req, res) => {
  user.deleteOne({
      UserID: req.body.UserID
  }, function (err, obj) {
      if (err) throw err;
      else {
          console.log(obj);
          res.send("success");
      }
  });
});

app.post("/api/updateUser", (req, res) => {
  user.findOne({UserID: req.body.UserID},function (err, obj){
    if (err)
        throw err;
    else{
      if(obj.UserName!=req.body.UserName){
        user.updateOne({UserID:req.body.UserID}, { $set: { UserName: req.body.UserName }}, function (err, obj) {
          if (err)
              throw err;
          else
            res.send("Sucess");
        });
      }
      else if(obj.Password!=req.body.Password){
        user.updateOne({UserID:req.body.UserID}, { $set: { Password: req.body.Password }}, function (err, obj) {
          if (err)
              throw err;
          else
            res.send("Sucess");
        });
      }
      else{
        res.send("Everything is already same");
      }
  }
  })
});

app.post('/sendCSV', function (req, res, next) {
  csv()
.fromFile(req.body.FilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
	/**
		[ 
		  { _id: '1', name: 'Jack Smith', address: 'Massachusetts', age: '23' },
		  { _id: '2', name: 'Adam Johnson', address: 'New York', age: '27' },
		  { _id: '3', name: 'Katherin Carter', address: 'Washington DC', age: '26' },
		  { _id: '4', name: 'Jack London', address: 'Nevada', age: '33' },
		  { _id: '5', name: 'Jason Bourne', address: 'California', age: '36' } 
		]
  */
    var fileName=req.body.FilePath.toString().split("/");
    console.log(fileName[fileName.length-1]);
    var currentDate=new Date();
    console.log(currentDate);
    var username;
    user.findById(req.session.userId)
    .exec(function (error, userd) {
      if(!error){
        username=userd.UserID;
        console.log(username);
      }
    });
    var importd = new importData({
      Name: fileName[fileName.length-1],
      Uploaded_on: currentDate,
      Uploaded_by: username
    });
    importd.save(function(err,userd){
      if(err){
        res.send("failure");
      }
      else{
            res.send("Sucess");
      }
    });
	
  // Insert Json-Object to MongoDB 
  for (i = 0; i < Object.keys(jsonObj).length; i++) { 
   var leadsD=new leadsData({
    ID:,
    Category:,
    Created_by:,
   })


  }
  
	  leadsData.insertMany(jsonObj, (err, obj) => {
    if (err)
      res.send("Data formate wrong");
    else{
      console.log("Number of documents inserted: " + obj.insertedCount);
      res.send("Sucess")
    }
	  });
})
})


app.get('/api/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/login');
      }
    });
  }
});


// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.listen();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
