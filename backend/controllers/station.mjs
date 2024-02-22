import Station from '../models/Station.mjs';

export const getStations = (req, res) => {

    Station.find({})
    .then(items => { 
        console.log(items);
        res.send(items);
    });

}

export const createStation = (req, res) => {
    var stations = req.body
    stations.forEach(data => {

        var station = new Station(data);
    
        station.save((err) => {
            if (err) {
                console.log(err);
            }
            else{
                console.log("Station created successfully");
            }      
    
        });
    })

    res.send("Request completed successfully")
}

export const deleteStations =  (req, res) =>{
    Station.deleteMany({},(err)=>{
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

export const getStation = (req, res) => {
    
    const id = req.params.id;

    Station.findOne({_id: id})
    .then(station => { 
        console.log(station);
        res.send(station);
    });

}

export const replaceStation = (req, res) => {
    const id = req.params.id;
    
    Station.replaceOne({_id: id},
        req.body,
        {overwrite: true},
        (err)=>{
            if(!err){
                 console.log('Station updated successfully');
                 res.send('Station updated successfully');
            }

            else{
                console.log(err);
            }
             
         })
}

export const updateStation = (req, res) =>{
    const id = req.params.id;

    Station.updateOne({_id: id},
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

export const deleteStation = (req, res) =>{

    const id = req.params.id;

    Station.deleteOne({_id: id},(err)=>{
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
