const http = require('http');
const url = require('url');

const homestayController = require('./src/controller/homestay.controller');
const GeneralController = require('./src/controller/general.controller');

const PORT = 3000;

const server = http.createServer((req, res) => {
    let pathUrl = url.parse(req.url).pathname;
    let chosenRouter = (typeof router[pathUrl] !== 'undefined') ? router[pathUrl] : GeneralController.handlerNotFound;
    chosenRouter(req, res).catch(err => console.log(err.message));
})

router = {
    '/': homestayController.getDisplayHomestayPage,
    '/detail': homestayController.getDetailPage,
    '/add': homestayController.addHomestay,
    '/update': homestayController.updateHomestay,
    '/delete': homestayController.deleteHomestay
}

server.listen(PORT, 'localhost', () => console.log(`Server is running at http://localhost:${PORT}`))