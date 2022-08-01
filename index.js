const express = require("express");
const path = require("path");
const Pusher = require("pusher");
const dotenv = require("dotenv")
dotenv.config();
const { pusherConfig } = require("./engine/config");
const cors = require('cors');


// port 
const port = process.env.PORT 

// initialization
const app = express();

//Use the path module to set a static path
app.use(express.static(path.join(__dirname, "client")))

// set up pusher
const pusher = new Pusher({
    appId: pusherConfig.pusher_app_id,
    key: pusherConfig.pusher_key,
    secret: pusherConfig.pusher_secret,
    cluster: pusherConfig.pusher_cluster,
    useTLS: pusherConfig.pusher_use_tls
  });


// middleware
app.use(express.json());
app.use(cors());



// routes 

// app.post('/create-push', function(request, response){

//     pusher.trigger("bitmama", "new-post", {
//         post_title: request.body.post_title,
//         post_content: request.body.post_content,
//     })
  
  
//     response.send({});
    
// })


app.post('/create-push', function(request, response){

  pusher.trigger("bitmama", "new-post", {
    message: "dj miles worldwide"
})
})


//listening
app.listen(port, ()=> console.log(`server is listening on port ${port}`))