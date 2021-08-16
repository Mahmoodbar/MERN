const Pirate= require ('../models/pirate.model');

module.exports.findAllPirates = (req, res) => {
    Pirate.find()
        .then(allDaPirates => res.json({ pirates: allDaPirates }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.findOneSinglePirate  = (req, res) => {
    Pirate.findOne({ _id: req.params.id })
        .then(oneSinglePirate => res.json({ pirate: oneSinglePirate }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.createNewPirate = (req, res) => {
    console.log(req.body)
    Pirate.create(req.body)
        .then(newlyCreatedPirate => res.json({ pirate: newlyCreatedPirate }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
 
module.exports.deleteAnExistingPirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}