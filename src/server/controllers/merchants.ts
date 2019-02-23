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
  router.get('/merchants', (req, res) => {
    const { skip = 0, take = 10 } = req.query as IRequestQueryData;
    res.json(merchants.slice(skip, skip + 1 + take));
  });

  router.get('/merchants/:id', (req, res) => {
    const merchant = merchants.find(
      m => m.id === req.params.id
    );
    merchant ? res.json(merchant) : res.status(404).end();
  });

  router.post('/merchants', async (req, res) => {
    const merchant: IMerchant = await req.json();
    merchant.id = uuidv1();
    merchants.push(merchant);
    res.json(merchant);
  });

  router.put('/merchants/:id', async (req, res) => {
    const merchant: IMerchant = await req.json();
    const index = merchants.findIndex(
      m => m.id === req.params.id
    );
    if (index !== -1) {
      merchants[index] = merchant;
      res.json(merchant);
    } else {
      res.status(404).end();
    }
  });

  router.delete('/merchants/:id', (req, res) => {
    if (merchants.some(
      m => m.id === req.params.id
    )) {
      merchants = merchants.filter(
        merchant => merchant !== req.params.id
      );
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  });
};
