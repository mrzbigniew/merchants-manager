import { IBid } from './IBid';

export interface IMerchant {
  id: string;
  firsName: string;
  lastName: string;
  avatarUrl: string;
  email: string;
  phone: string;
  hasPremium: boolean;
  bids: IBid[];
}
