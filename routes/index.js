var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/real_version1', function(req, res, next) {
  res.render('real', {
    title: "Re-L-ребенок",
    picture: "images/Real-child.jpg",
    desc: "Ри-Л Мэйер — одна из главных героинь Ergo Proxy. Будучи следователем Бюро разведки в Ромдо, она подвергается нападению двух монстров и оказывается втянута в тайну Прокси. В конце концов она присоединяется к Винсенту Лоу и Пино в их поисках ответов."
  });
});

router.get('/real_version2', function(req, res, next) {
  res.render('real', {
    title: "Re-L-оригинал",
    picture: "images/Real.jpg",
    desc: "Более взрослая версия Ри-л."
  });
});

router.get('/real_version3', function(req, res, next) {
  res.render('real', {
    title: "Real-клон",
    picture: "images/Real-clone.jpg",
    desc: "Реал — это перевоплощённый клон Монады, который хочет найти Эрго Прокси и воссоединиться с ним."
  });
});

module.exports = router;
