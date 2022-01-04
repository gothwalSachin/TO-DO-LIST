const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'ToDoList' });
});

router.get('/mylist', function (req, res, next) {
  res.render('mylist', { title: 'My List' });
});

module.exports = router;
