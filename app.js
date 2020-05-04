const express = require('express');
const app = express();
const router = require('./routes/route');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions ={
    swaggerDefinition:{
        info: {
            title: 'FakeLook API',
            description: 'FakeLook server API\'s Information',  
            contact: {
                name: 'Eran Haviv'
            },
            servers: ["http://localhost:8888"]
        }
    },
    apis: ['./routes/route.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(cors());
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

app.use(router);

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Now listening on port ${port}...`));
