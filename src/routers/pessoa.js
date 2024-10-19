const express = require('express')
const ControllerPessoa = require('../controllers/pessoa')

const router = express.Router();

router.get('/', ControllerPessoa.GetPessoas)
router.post('/', ControllerPessoa.CreatePessoa)
router.put('/:id', ControllerPessoa.UpdatePessoa)
router.delete('/:id', ControllerPessoa.DeletePessoa)

module.exports = router