import { createServer } from 'service-mocker';
import merchantsController from './controllers/merchants';
const { router } = createServer('/api');
merchantsController(router);
