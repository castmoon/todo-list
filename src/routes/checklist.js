const express = require('express');

const router = express.Router();

const Checklist = require ('../models/checklist');

router.get('/', async (req, res) => {
  try {
    let checklist = await Checklist.find({});
    res.status(200).render('checklists/index', { checklist: checklist })
  }catch(e) {
    res.status(400).render('pages/error', {error : 'Erro ao exibir as listas'});
  }
});

router.post('/', async (req, res) => {
  let { name } = req.body;
  try {
  let checklist = await Checklist.create({ name });
  res.json(checklist);
}catch(e) {
  res.status(422).json(e);
}
})

router.get('/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).render('checklists/show', { checklist: checklist })
  }catch(e) {
    res.status(400).render('pages/error', {error : 'Erro ao exibir as listas de tarefas'});
  }
});

router.put('/:id', async (req, res) => {
  let { name } = req.body;
  try {
      let checklist = await Checklist.findByIdAndUpdate(req.params.id, { name }, {new: true});
      res.status(200).json(checklist);

  }catch(e) {
    res.status(400).json(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findByIdAndDelete(req.params.id);
    res.status(200).json(checklist);
  } catch(e) {
    res.status(400).json(e);
  }
})

module.exports = router;