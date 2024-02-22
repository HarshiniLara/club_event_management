import Participant from '../models/Participant.mjs';

export const registerUser = (req, res) => {
    const { name, phone, dob, gender, address,occupation,email, password } = req.body;

    // check if user already exists with the given email
    Participant.findOne({ email: email })
    .then(user => {
        if (user) {
            return res.status(409).send('User already exists');
        }

        // create a new user object with the given data
        const newUser = new Participant({
            name: name,
            phone: phone,
            dob: dob,
            gender: gender,
            address: address,
            occupation: occupation,
            email: email,
            password: password
        });

        // save the user object to the database
        newUser.save()
        .then((user) => res.status(200).send(user))
        .catch((err) => res.status(400).send(err.message));
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send('Internal server error');
    });
};

export const loginUser = (req, res) => {
    const { email, password } = req.body;

    // check if user exists with the given email
    Participant.findOne({ email: email })
    .then(user => {
        if (!user) {
            return res.status(404).send('User not found');
        }

        // check if password is correct
        if (user.password !== password) {
            return res.status(401).send('Invalid credentials');
        }

        res.send(user);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send('Internal server error');
    });
};
