require("dotenv").config(); //bring in the dotenv configuration

const pusherConfig = {
    pusher_key: process.env.PUSHER_KEY,
    pusher_app_id: process.env.PUSHER_APP_ID,
    pusher_secret: process.env.PUSHER_SECRET, 
    pusher_cluster: process.env.PUSHER_CLUSTER,
    pusher_use_tls: process.env.PUSHER_USE_TLS 
}

module.exports = { pusherConfig }