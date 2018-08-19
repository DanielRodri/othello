const express = require('express');
const router = express.Router();
const rulesCtrl = require('../controllers/rules.controller')

router.get('/',rulesCtrl.getMatrix)//pide
router.put('/rules/:posX/:posY',rulesCtrl.tryMove)//actualiza
//router.post//crea datos
//router.delete//elimina datos

module.exports = router;