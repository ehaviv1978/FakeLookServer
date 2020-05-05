const express = require('express');
const app = express();
const routerUsers = require('./routes/routesUsers');
const routerPosts = require('./routes/routesPosts');
const routerComments = require('./routes/routesComments');
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
    apis: ['./routes/*']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(cors());
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

app.use(routerUsers,routerPosts,routerComments);

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Now listening on port ${port}...`));
