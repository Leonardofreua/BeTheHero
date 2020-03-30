const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const ongValidate = require('./validators/ongValidator');
const profileValidate = require('./validators/profileValidator');
const { deleteValidate, queryParamsValidate } = require('./validators/incidentValidator');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', ongValidate, OngController.store);

routes.get('/incidents', queryParamsValidate, IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', deleteValidate, IncidentController.delete);

routes.get('/profile', profileValidate, ProfileController.index);

module.exports = routes;