//var data = require('../../Data.json');
const editJsonFile = require("edit-json-file");
let file = editJsonFile(`${__dirname}/../../Data.json`);
var methods = require('../../modules/reversie')
const rulesCtrl = {}

rulesCtrl.getMatrix = (req,res)=>{
    res.json(file.get("matrix"));
}

rulesCtrl.tryMove = (req,res)=>{
    let actualPlayer = file.get("actualPlayer");
    let object = methods.validateMove(req.body.matrix,req.body.posX,req.body.posY,actualPlayer,file.get("size")); 
    if(object.validate===true){
        file.set("matrix",object.matrix)
        if(actualPlayer===1){
            file.set("actualPlayer",2)
        }
        else{
            file.set("actualPlayer",1)
        }
        //console.log("despues del move, ahora sigue: "+file.get("actualPlayer"))
        file.save()
    }
    res.json(object.matrix);
}
rulesCtrl.createMatrix= (req,res)=>{
    let matrix = methods.crearTablero(req.body.size);
    file.set("matrix",matrix)
    file.set("actualPlayer",1)
    file.set("size",req.body.size)
    file.save()
    res.json(matrix)
    //res.json("se creo el tablero, mensaje desde servidor")
}
module.exports = rulesCtrl;