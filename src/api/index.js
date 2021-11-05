const { Router } = require ('express');

const { routes: customRoutes } = require ('./custom');


const router = Router ();

router.use ('/custom', customRoutes);


module.exports = router;