const PirateController = require('../controllers/pirate.controller');
 
module.exports = function(app){
    app.get('/api/pirates', PirateController.findAllPirates);
    app.get('/api/pirates/:id', PirateController.findOneSinglePirate);
//     app.put('/api/pirates/:id', PirateController.updateExistingPirate);
    app.post('/api/pirates', PirateController.createNewPirate);
    app.delete('/api/pirates/:id', PirateController.deleteAnExistingPirate);
}