import { MockerRouter } from 'service-mocker';
import * as uuidv1 from 'uuid/v1';

import { mock as merchantsMock } from '@mocks/merchants';
import { IMerchant } from '@models/IMerchant';
import { IFetchMerchantsResponse } from '@models/IFetchMerchantsResponse';

let merchants = merchantsMock;

export default (router: MockerRouter) => {
  router.get('/merchants', (req, res) => {
    const { skip = 0, take = 9 } = req.query;
    const data = merchants.slice(+skip, (+skip) + (+take));
    res.json({
      merchants: data,
      skip: +skip,
      take: +take,
      total: merchants.length
    } as IFetchMerchantsResponse);
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
