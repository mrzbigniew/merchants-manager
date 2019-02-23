import * as uuidv1 from 'uuid/v1';

import { IMerchant } from '@models/IMerchant';


export const mock = [
  {
    avatarUrl: '',
    email: 'jon.doe@auto1.com',
    firsName: 'Jon',
    hasPremium: false,
    id: uuidv1(),
    lastName: 'Doe',
    phone: '600600600',
    bids: [
      {
        id: uuidv1(),
        amount: 100,
        carTitle: 'Car 1',
        created: new Date().toJSON()
      },
      {
        id: uuidv1(),
        amount: 100,
        carTitle: 'Car 2',
        created: new Date().toJSON()
      },
      {
        id: uuidv1(),
        amount: 100,
        carTitle: 'Car 3',
        created: new Date().toJSON()
      }
    ],
  },
  {
    id: uuidv1(),
    avatarUrl: '',
    email: 'alan.doe@auto1.com',
    firsName: 'Alan',
    hasPremium: false,
    lastName: 'Doe',
    phone: '200200201',
    bids: [
      {
        id: uuidv1(),
        amount: 10,
        carTitle: 'Car 1',
        created: new Date().toJSON()
      },
      {
        id: uuidv1(),
        amount: 50,
        carTitle: 'Car 1',
        created: new Date().toJSON()
      },
      {
        id: uuidv1(),
        amount: 200,
        carTitle: 'Car 3',
        created: new Date().toJSON()
      }
    ],
  },
  {
    avatarUrl: '',
    email: 'micky.mouse@auto1.com',
    firsName: 'Micky',
    hasPremium: false,
    id: uuidv1(),
    lastName: 'Mouse',
    phone: '300300301',
    bids: [
      {
        id: uuidv1(),
        amount: 100,
        carTitle: 'Car 1',
        created: new Date().toJSON()
      },
      {
        id: uuidv1(),
        amount: 100,
        carTitle: 'Car 2',
        created: new Date().toJSON()
      },
      {
        id: uuidv1(),
        amount: 100,
        carTitle: 'Car 1',
        created: new Date().toJSON()
      }
    ],
  },
  {
    avatarUrl: '',
    email: 'ducky.duck@auto1.com',
    firsName: 'Ducky',
    hasPremium: false,
    id: uuidv1(),
    lastName: 'Duck',
    phone: '400400401',
    bids: [
      {
        id: uuidv1(),
        amount: 101,
        carTitle: 'Car 3',
        created: new Date().toJSON()
      },
      {
        id: uuidv1(),
        amount: 102,
        carTitle: 'Car 2',
        created: new Date().toJSON()
      },
      {
        id: uuidv1(),
        amount: 103,
        carTitle: 'Car 2',
        created: new Date().toJSON()
      }
    ],
  },
] as IMerchant[];