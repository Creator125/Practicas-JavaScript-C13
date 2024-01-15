const express = require("express");

const app = express();
const port = 3100;

app.use(express.json());

app.get("/weather/:city", async (req, res) => {
    const city = req.params.city;

    try{
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?
        q=${city}&units=metric&appid=${apiKey}`);
    
        const weatherData = await weatherResponse.json();
        return res.send(weatherData);
    }catch (error){
        res.status(404).json({error:"city not fount"});
        res.status(500).json({error:"Error service unavailable"});
        console.error(error);
    }

});

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})