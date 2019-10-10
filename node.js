var mysql = require('mysql');
var express = require('express');
var cors= require('cors');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "jarvis"
});

// app.post('/form', function(req, res) {
//     console.log(req.body);
//     res.write('You sent the date "' + req.body.date+'".\n');
//     res.write('You sent the project "' + req.body.project+'".\n');
//     res.write('You sent the hours "' + req.body.hours+'".\n');
//     res.write('You sent the comment "' + req.body.comment+'".\n');
//     res.end()
//     mysql.query("INSERT INTO employee (date, project,hours,comment) VALUES ('"+req.body.date+"','"+req.body.project+"','"+req.body.hours+"','"+req.body.comment+"')",function(err, result)      
// {                                                      
//   if (err)
//      throw err;
// });
// });

// app.get('/project',function(req,res)
// {
//     mysql.query("select* from project");
//     {
//         if(err)
//         {
//             throw err;
//         }
//     }
// })

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM project ",function (err, result) {
//       if (err) throw err;
//       console.log(result[0].project);
//       result.forEach()
//       {

//       }
//     });
//   });

app.get('/data',(req,res)=>{
    con.connect(function(err)
    {
        if(err)
        throw err;
        else{
            con.query("Select * from employee",(err,result)=>{
                if(err)
                console.log(err)
                res.send(JSON.stringify(result));
            })
        }
    })
});
app.get('/data1',(req,res)=>{
    con.connect(function(err)
    {
        if(err)
        throw err;
        else{
            con.query("select * from project",(err,result)=>
            {
                if(err)
                console.log(err)
                res.send(JSON.stringify(result));
            })
        }
    })
})
app.listen(3000,(req,res)=>{
    console.log('Application is running at port 3000');
})



