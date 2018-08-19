const express = require('express');
const rules = require('../modules/rules.js')
const app = express();
const cors = require('cors')

//Settings
app.set('port',process.env.PORT || 3000);


//Middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


//Routes
app.use('/api/game',require('./routes/rules.routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log("App now running on port", app.get('port'));
  });





/*app.get('/api/rules', function (req, res) {
  res.send(rules.sendHelp());
  console.log("asd");
});

app.post('/api/rules', function(req,res){
    //posX= req.body.posX;
    //posY= req.body.posY;

    console.log("recibí lo que necesitaba ");
    res.json({hola:"hola"})
});

function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }*/

