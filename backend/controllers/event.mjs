import Event from '../models/Event.mjs';

export const getEvents = (req, res) => {

    Event.find({})
    .then(items => { 
        console.log(items);
        res.send(items);
    });

}



export const createEvent = (req, res) => {
    var events = req.body
    events.forEach(data => {

        var event = new Event(data);
    
        event.save()
        .then(()=> res.send("Event created successfully"))
        .catch((err) => {
            console.log(err);
            res.status(500).send(err.message)})
    })

}


export const getEventsOfOrganizer = (req, res) => {
  const organizer_id = req.params.organizer_id;

  Event.find({organizer_id})
    .then(items => {
      res.send(items);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error fetching events');
    });
};

export const getNearbyEvents = (req, res) => {
    const pincode = req.params.pincode;
  
    Event.find({pincode:pincode})
      .then(items => {
        res.send(items);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error fetching events');
      });
  };

  export const getEventbyTopics = (req, res) => {
    const topic = req.params.topic;
  
    Event.find({topic:topic})
      .then(items => {
        res.send(items);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error fetching events');
      });
  };

export const deleteEvents =  (req, res) =>{
    Event.deleteMany({},(err)=>{
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

export const getEvent = (req, res) => {
    
    const id = req.params.id;
    console.log(id)
    Event.findOne({_id: id})
    .then(event => { 
   
        res.send(event);
    })
    .catch(error=>{
        res.status(400).send(error.message)
    });

}

export const replaceEvent = (req, res) => {
    const id = req.params.id;
    
    Event.replaceOne({_id: id},
        req.body,
        {overwrite: true},
        (err)=>{
            if(!err){
                 console.log('Event updated successfully');
                 res.send('Event updated successfully');
            }

            else{
                console.log(err);
            }
             
         })
}

export const updateEvent = (req, res) =>{
    const id = req.params.id;

    Event.updateOne({_id: id},
        {$set: req.body},
        )
        .then(response=> {
            console.log(response.data)
            res.send("Updated Successfully")
        })
        .catch(error=> {
            console.log(error)
            res.status(400).send(error.message)
        })
}

export const deleteEvent = (req, res) =>{

    const id = req.params.id;

    Event.deleteOne({_id: id},
        {$set: req.body},
        )
        .then(response=> {
            console.log(response.data)
            res.send("Deleted Successfully")
        })
        .catch(error=> {
            console.log(error)
            res.status(400).send(error.message)
        })
}
