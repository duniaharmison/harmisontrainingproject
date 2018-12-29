var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HarmiSci Classroom Website' });
});

router.get('/chemistry', function(req, res, next) {
  res.render('index', { title: 'Chemistry' });
});

router.get('/physics', function(req, res, next) {
  res.render('index', { title: 'Physics' });
});

router.get('/physicalscience', function(req, res, next) {
  res.render('index', { title: 'Physical Science' });
});

router.get('/engineeringdesign', function(req, res, next) {
  res.render('index', { title: 'Engineering Design' });
});

router.get('/advancedchemistry', function(req, res, next) {
  res.render('index', { title: 'Advanced Chemistry' });
});

router.get('/designcompetitions', function(req, res, next) {
  res.render('index', { title: 'Design Competitions' });
});

router.get('/photos', function(req, res, next) {
  res.render('index', { title: 'Photos and Video' });
});

router.get('/resources', function(req, res, next) {
  res.render('index', { title: 'Resources' });
});

router.get('/notes', function(req, res, next) {
  res.render('index', { title: 'Notes' });
});

router.get('/photos', function(req, res, next) {
  res.render('index', { title: 'Photos and Video' });
});

router.get('/notes', function(req, res, next) {
  res.render('index', { title: 'Notes' });
});

router.get('/learningvideos', function(req, res, next) {
  res.render('index', { title: 'Learning Videos' });
});

router.get('/assignments', function(req, res, next) {
  res.render('index', { title: 'assignments' });
});

router.get('/nerdwork', function(req, res, next) {
  res.render('index', { title: 'Nerd Work' });
});


module.exports = router;
