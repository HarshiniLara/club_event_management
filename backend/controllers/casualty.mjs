import Casualty from '../models/Casualty.mjs';

export const getCasualties = (req, res) => {

    Casualty.find({})
    .then(items => { 
        console.log(items);
        res.send(items);
    });

}

export const createCasualty = (req, res) => {
    var casualties = req.body
    casualties.forEach(data => {

        var casualty = new Casualty(data);
    
        casualty.save((err) => {
            if (err) {
                console.log(err);
            }
            else{
                console.log("Casualty created successfully");
            }      
    
        });
    })

    res.send("Request completed successfully")
}

export const deleteCasualties =  (req, res) =>{
    Casualty.deleteMany({},(err)=>{
        if(err){
            console.log(err);
            res.send('Couldn\'t delete items');
        }
        else{
            console.log("Deleted all items successfully");
            res.send('Items deleted successfully');
        }

    });
}

export const getCasualty = (req, res) => {
    
    const id = req.params.id;

    Casualty.findOne({_id: id})
    .then(casualty => { 
        console.log(casualty);
        res.send(casualty);
    });

}

export const replaceCasualty = (req, res) => {
    const id = req.params.id;
    
    Casualty.replaceOne({_id: id},
        req.body,
        {overwrite: true},
        (err)=>{
            if(!err){
                 console.log('Casualty updated successfully');
                 res.send('Casualty updated successfully');
            }

            else{
                console.log(err);
            }
             
         })
}

export const updateCasualty = (req, res) =>{
    const id = req.params.id;

    Casualty.updateOne({_id: id},
        {$set: req.body},
        
        (err)=>{
            if(!err){
                 console.log('Item updated successfully');
                 res.send('Item updated successfully');
            }

            else{
                console.log(err);
            }
             
        })
}

export const deleteCasualty = (req, res) =>{

    const id = req.params.id;

    Casualty.deleteOne({_id: id},(err)=>{
        if(err){
            console.log(err);
            res.send('Couldn\'t delete item ' + itemName);
        }
        else{
            console.log("Deleted all items successfully");
            res.send('Items deleted successfully '+itemName);
        }

    });

}
