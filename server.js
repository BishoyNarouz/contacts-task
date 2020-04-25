import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import xss from 'xss-clean'
import hpp from 'hpp'
import config from './Config'
import dbConfig from './Database/DBConfig'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import routes from './Modules/routes'

const app = express()
app.use(bodyParser.json({ limit: config.RequestSizeLimit }))
app.use(bodyParser.urlencoded({ limit: config.RequestSizeLimit, extended: true }))
app.use(cors(config.corsOptions))

app.use(helmet());
app.use(xss());
app.use(hpp());

app.use('/api', routes);

const swaggerDocument = YAML.load('./swagger.yaml')
app.use('/vapulus-backend-apis', swaggerUi.serve, swaggerUi.setup(swaggerDocument, config.swaggerOptions))

app.listen(config.BackendPort, () => console.log(`the app listening on port ${config.BackendPort}`))