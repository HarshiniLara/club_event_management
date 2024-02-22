import Police from '../models/Police.mjs';

export const getPolices = (req, res) => {

    Police.find({})
    .then(items => { 
        console.log(items);
        res.send(items);
    });

}

export const createPolice = (req, res) => {
    var polices = req.body
    polices.forEach(data => {

        var police = new Police(data);
    
        police.save((err) => {
            if (err) {
                console.log(err);
            }
            else{
                console.log("Police created successfully");
            }      
    
        });
    })

    res.send("Request completed successfully")
}

export const deletePolices =  (req, res) =>{
    Police.deleteMany({},(err)=>{
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

export const getPolice = (req, res) => {
    
    const id = req.params.id;

    Police.findOne({_id: id})
    .then(police => { 
        console.log(police);
        res.send(police);
    });

}

export const replacePolice = (req, res) => {
    const id = req.params.id;
    
    Police.replaceOne({_id: id},
        req.body,
        {overwrite: true},
        (err)=>{
            if(!err){
                 console.log('Police updated successfully');
                 res.send('Police updated successfully');
            }

            else{
                console.log(err);
            }
             
         })
}

export const updatePolice = (req, res) =>{
    const id = req.params.id;

    Police.updateOne({_id: id},
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

export const deletePolice = (req, res) =>{

    const id = req.params.id;

    Police.deleteOne({_id: id},(err)=>{
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
