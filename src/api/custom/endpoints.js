const { Router } = require ('express');

const controller = require ('./controllers.js');


const router = Router ();

router.post   ('/', controller.create);
router.get    ('/', controller.getAll);
router.get    ('/:codeorid', controller.getOne);
router.put    ('/:codeorid', controller.update);
router.delete ('/:codeorid', controller.remove);

module.exports = router;