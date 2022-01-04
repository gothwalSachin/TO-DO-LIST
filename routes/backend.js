const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
const Schema = mongoose.Schema;
const mySchema = new Schema({
  description: String,
  status: String,
});

const list = mongoose.model('list', mySchema);

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/getItems', function (req, res, next) {
  list.find({}, function (err, items) {
    if (!err) res.json(items);
  });
});
router.post('/changeStatus', function (req, res, next) {
  list.findOneAndUpdate(
    { _id: req.body.id },
    { status: req.body.status },
    function (err, item) {
      if (!err) res.send('Status Updated');
    }
  );
});
router.post('/addItems', function (req, res, next) {
  // console.log(req.body);
  const item = new list({
    description: req.body.description,
    status: req.body.status,
  });
  item.save();
  res.send('Element added');
});

module.exports = router;
