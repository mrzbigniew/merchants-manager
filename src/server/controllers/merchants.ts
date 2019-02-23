import { MockerRouter } from 'service-mocker';
import * as uuidv1 from 'uuid/v1';

import { mock as merchantsMock } from '@mocks/merchants';
import { IMerchant } from '@models/IMerchant';

interface IRequestQueryData {
  skip?: number;
  take?: number;
};

let merchants = merchantsMock;

export default (router: MockerRouter) => {
  router.get('/', (req, res) => {
    const { skip = 0, take = 10 } = req.query as IRequestQueryData;
    res.json(merchants.slice(skip, skip + 1 + take));
  });

  router.post('/', async (req, res) => {
    const merchant: IMerchant = await req.json();
    merchant.id = uuidv1();
    merchants.push(merchant);
    res.json(merchant);
  });

  router.put('/:id', async (req, res) => {
    const merchant: IMerchant = await req.json();
    merchants[merchants.findIndex(
      m => m.id === req.params.id
    )] = merchant;
    res.json(merchant);
  });

  router.delete('/:id', (req, res) => {
    merchants = merchants.filter(
      merchant => merchant !== req.params.id
    );
    res.status(204).end();
  });
};
