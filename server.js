const { app } = require("./app");

// declaring our port 
const port = process.env.PORT;


// listening to server
app.listen(port, () => {
    console.log(`Server Up and running on port ${port} 🔗🔗🔗`);
})