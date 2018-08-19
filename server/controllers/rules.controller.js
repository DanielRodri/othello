var data = require('../../Data.json');
const rulesCtrl = {}

rulesCtrl.getMatrix = (req,res)=>{
    //console.log(data.matrix)
    res.json(data.matrix);
}

rulesCtrl.tryMove = (req,res)=>{
    res.json({
        status: 'Api show tryMove',
        posX:req.body.posY,
        posY:req.body.posX
    })
}



module.exports = rulesCtrl;