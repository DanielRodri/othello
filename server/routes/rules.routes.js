const express = require('express');
const router = express.Router();
const rulesCtrl = require('../controllers/rules.controller')

router.get('/getMatrix',rulesCtrl.getMatrix)//pide
router.get('/getPlayers',rulesCtrl.getPlayers)//pide
router.get('/getBoardStyle',rulesCtrl.getBoardStyle)//pide
router.get('/getPieceStyle',rulesCtrl.getPieceStyle)//pide
router.put('/rules/:posX/:posY',rulesCtrl.tryMove)//actualiza
router.put('/config/board',rulesCtrl.configBoard)//actualiza
router.post('/createMatrix',rulesCtrl.createMatrix)//crea matriz
//router.post//crea datos
//router.delete//elimina datos

module.exports = router;