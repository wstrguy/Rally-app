const { User } = require("../models/user.model");

// create a customer signup controller

exports.customerSignup = async (req, res) => {
    const { name, destination, age, nextOfKin, nextOfKinNum } = req.body;
    try {

        // create input validation
        if (!(name && destination && age && nextOfKin && nextOfKinNum)) {
            return res.status(400).json({
                error: "Input all fields ⛔⛔⛔"
            });
        }

        if (age < 18) {
            return res.status(400).json({
                error: "Cannot be less than 18 years old"
            });
        }
        const user = await  User.create({
            name,
            destination,
            age,
            nextOfKin,
            nextOfKinNum
        });
        return res.status(201).json({
            message: "User created Successfully ✔️✔️✔️✔️",
            data: user._id,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};


exports.customerCount = async (req, res) => {
    try {
     const count = await User.estimatedDocumentCount();
        return res.status(200).json({
            message: `Total customer count is ${count}`
        });
        

    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
        
    }
};

exports.editCustomerData = async (req, res) => {
    const id = req.params.id;
    const { name, destination, age, nextOfKin, nextOfKinNum } = req.body;
    try {
        const editData = await User.findByIdAndUpdate(id,{
            name,
            destination,
            age,
            nextOfKin,
            nextOfKinNum
        },
        {new: true}
        );
            return res.status(200).json({
                message: "Information updated succesfully 👌👌👌👌"
            });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.delCustomerData = async (req, res) => {
    try {
        const del = await User.deleteMany();
        return res.status(200).json({
            message: "All users deleted: db empty ⚠️⚠️⚠️ "
        });
        
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}