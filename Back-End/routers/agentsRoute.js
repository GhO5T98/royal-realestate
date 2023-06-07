const express = require('express')
const app = express()
const agentsModel = require('../models/agents')


app.post('/Agents', async (req, res) => {
    try {
        const newAgents = new agentsModel(req.body); // marrja
        // Ruajtje
        await newAgents.save();
    } catch (error) {
        res.status(500).send("Not created " + error)
    }
})




app.get("/Agents", async (req, res) => {
    try {
        const agents = await agentsModel.find ({})
        res.status(200).send(agents)
        
    } catch (error) {
        res.status(500).send('Not showing ' + err)
        
    }
});



module.exports = app