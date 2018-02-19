exports.findAll = function(req, res) {
    res.send([{name:'santhu'}, {name:'santhu1'}, {name:'santhu3'}]);
};

exports.findById = function(req, res){
    res.send({id:req.params.id, name:'The Black Panther', description:"description"});
};
