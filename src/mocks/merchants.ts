import * as uuidv1 from 'uuid/v1';

import { IMerchant } from '@models/IMerchant';
import { IBid } from '@models/IBid';
import { randomNumber } from '@utils/rendomNumber';

export const getRandomBoolean = (): boolean => {
  return randomNumber({max: 2, min: 1}) === 1;
};

export const carTitlesMock: string[] = new Array(1000).fill(null).map(
  (item, index) => `Car ${index + 1}`
);

export const generateHumanName = (): { name: string, surname: string } => {
  const names: string[] = ['Early', 'Eastwood', 'Ebadi', 'Eban', 'Ebert', 'Ecclestone', 'Echols', 'Eckhart', 'Eddington', 'Edison', 'Edward VII', 'Edwards', 'Edwards', 'Eggers', 'Ehrlich', 'Einstein', 'Eisenhower', 'Eisenstein', 'ElBaradei', 'Eldredge', 'Eliot', 'Eliot', 'Elizabeth', 'Ellington', 'Elliot', 'Elliot', 'Ellison', 'Eluard', 'Emerson', 'Engelke', 'Erdös', 'Erikson', 'Escher', 'Esposito', 'Estefan', 'Everett', 'Ezrin', 'Fakes', 'Farage', 'Farjeon', 'Farmer', 'Noli', 'Fatiaki', 'Faulkner', 'Favre', 'Fawkes', 'Federer', 'Feibig', 'Feingold', 'Feldman', 'Fellini', 'Ferguson', 'Ferguson', 'Fermi', 'Ferrell', 'Ferron', 'Fétis', 'Fey', 'Feynman', 'Fielding', 'Fields', 'Finney', 'Firestone', 'Fischer', 'Fischer', 'Fish', 'Fishback', 'Fisher', 'Fiske', 'Fiszer', 'Fitzgerald', 'Fitzgerald', 'Flaubert', 'Flynt', 'Foch', 'Foley', 'Fonteyn', 'Forbes', 'Ford', 'Ford', 'Ford', 'Forster', 'Forsyth', 'Fort', 'Fosdick', 'Foster', 'Fowler', 'Fox', 'Fox', 'Foxworthy', 'France', 'Francona', 'Franck', 'Frank', 'Franklin', 'Franks', 'Franti', 'Franzen', 'Freud', 'Freund', 'Friedman', 'Friedman', 'Friedman', 'Friel', 'Frist', 'Fromm', 'Frost', 'Frostrup', 'Fulbright', 'Fulghum', 'Fuller', 'Fuller', 'Iacocca', 'Ibsen', 'Icke', 'Idle', 'Iloilo', 'Inge', 'Ingelow', 'Ingersoll', 'Ionesco', 'Ip', 'Irvine', 'Ishihara', 'Itoi', 'Izzard', 'Nabokov', 'Nachman', 'Nader', 'Nagel', 'Naidu', 'Nailatikau', 'Nailatikau', 'Najimy', 'Nash', 'Nash', 'Navakasuasua', 'Negroponte', 'Nelson', 'Nelson', 'Neruda', 'Newhart', 'Newton', 'Newton', 'Nicks', 'Nicoll', 'Niebuhr', 'Niemöller', 'Nietzsche', 'Nightingale', 'Nijinsky', 'Nin', 'Ninio', 'Niranjan', 'Niven', 'Nixon', 'Noam', 'Norton', 'Nugent', 'Nukem', 'Null', 'Nuwas', 'Obama', 'Oberst', 'O\'Brien', 'Ochs', 'O\'Donnell', 'Ogi', 'Ogilvy', 'O\'Keeffe', 'Oliver', 'Oliver', 'Olson', 'Olsen', 'Onassis', 'Ondrick', 'Oppenheimer', 'O\'Reilly', 'O\'Rourke', 'Ortiz', 'Orwell', 'Osbourne', 'O’Shaughnessy', 'Ouspensky', 'Overbury', 'Owens', 'Owsen', 'Qarase', 'Quale', 'Quarles', 'Quayle', 'Marie', 'Quine', 'Quintilian', 'Quisenberry', 'Ueshiba', 'Unamuno', 'Updike', 'Ustinov', 'Valenti', 'Valéry', 'Vance', 'Van Gogh', 'Varese', 'Ventura', 'Venturi', 'Vidal', 'Vivekananda', 'Vixie', 'Von Karman', 'Vonnegut', 'Vosanibola', 'Vaughan', 'X', 'Yankovic', 'Yamamoto', 'Yashinsky', 'Yeats', 'Yeltsin', 'Yockey', 'Yorke', 'Yoshida', 'Young', 'Young', 'Young', 'Young', 'Youngman', 'Yourcenar', 'Yutang', 'Zacharek', 'Zappa', 'Zawinski', 'Zeldin', 'Ziglar', 'Zimmermann', 'Zinck', 'Zinn', 'Zola'];
  const surnames: string[] = ['Jubal Anderson', 'Clint', 'Shirin', 'Abba', 'Roger', 'Bernie', 'Damien', 'Meister', 'Arthur Stanley', 'Thomas Alva', 'King of England', 'Edwin W.', 'John', 'Dave', 'Paul R.', 'Albert', 'Dwight D.', 'Ferdinand', 'Mohamed', 'Niles', 'George', 'Thomas Stearns', 'Duke', 'Cass', 'Jim', 'Harlan', 'Paul', 'Ralph Waldo', 'Anke', 'Paul', 'Steven', 'M. C.', 'Phil', 'Gloria', 'Carl', 'Bob', 'Dennis', 'Nigel', 'Eleanor', 'Frances', 'Fan', 'Daniel', 'William', 'Brett', 'Guy', 'Roger', 'Jim', 'Russ', 'Morton', 'Federico', 'Adam', 'Miriam', 'Enrico', 'Will', 'Marcelle', 'Joseph', 'Tina', 'Richard', 'Henry', 'W. C.', 'Albert', 'Shulamith', 'Bobby', 'Joschka', 'Michael', 'Margaret', 'Carrie', 'Irving', 'Franciszek', 'F. Scott', 'Patrick', 'Gustave', 'Larry', 'Ferdinand', 'Mick', 'Margot', 'Malcolm', 'Gerald', 'Harrison', 'Henry', 'E. M.', 'Bruce', 'Charles', 'Harry Emerson', 'Sir Robert Sidney', 'Gene', 'George', 'Virgil', 'Jeff', 'Anatole', 'Terry', 'Richard', 'Anne', 'Benjamin', 'Tommy', 'Michael', 'Jonathan', 'Sigmund', 'Peter', 'Kinky', 'Milton', 'Nat', 'Todd', 'Bill', 'Erich', 'Robert', 'Mariella', 'J. William', 'Robert', 'Buckminster', 'Margaret', 'Lee', 'Henrik', 'David', 'Eric', 'Ratu Josefa', 'William Ralph', 'Jean', 'Robert G.', 'Eugene', 'Regina', 'Eddie', 'Shintaro', 'Shigesato', 'Eddie', 'Vladimir', 'Rabbi', 'Ralph', 'Thomas', 'Richard', 'Adi Koila', 'Ratu Epeli Qaraninamu', 'Kathy', 'John Forbes', 'Thomas', 'Maciu', 'Nicholas', 'Hailey Anne', 'Horatio', 'Pablo', 'Bob', 'Isaac', 'John', 'Stevie', 'James', 'Reinhold', 'Martin', 'Friedrich', 'Florence', 'Vaslav', 'Anaïs Nin', 'Jacques', 'Sangeeta', 'Larry', 'Richard', 'Eli', 'Joshua Abraham', 'Ted', 'Duke', 'Gary', 'Abu', 'Barack', 'Conor', 'Conan', 'Phil', 'Rosie', 'Adolf', 'David', 'Georgia', 'Jamie', 'Robert T.', 'Ken', 'Mary-Kate and Ashley', 'Jacqueline Kennedy', 'William F.', 'J. Robert', 'Bill', 'P. J.', 'David', 'George', 'Ozzy', 'Arthur', 'P. D.', 'Thomas', 'Jesse', 'Dan', 'Laisenia', 'Anthony', 'Francis', 'Dan', 'Queen of Romania', 'Willard van Orman', 'Marcus Fabius', 'Dan', 'Morihei', 'Miguel de', 'John', 'Peter', 'Jack', 'Paul', 'Jack', 'Vincent', 'Edgard', 'Jesse', 'Ken', 'Gore', 'Swami', 'Paul', 'Theodore', 'Kurt', 'Josefa', 'Norman D.', 'Malcolm (Malcolm Little)', '"Weird Al"', 'Isoroku', 'Edward', 'William Butler', 'Boris', 'Francis Parker', 'Thom', 'Takeo', 'Cy', 'Edward', 'Neil', 'Tyler Shell', 'Henny', 'Marguerite', 'Lin', 'Stephanie', 'Frank', 'Jamie', 'Theodore', 'Zig', 'Philip', 'Kenneth', 'Howard', 'Emile'];
  return {
    name: names[randomNumber({ min: 1, max: names.length }) - 1],
    surname: surnames[randomNumber({ min: 1, max: surnames.length }) - 1]
  }
};

export const generateHumanEmail = ({ name, surname }: { name: string, surname: string }): string => {
  const topLevelDomain = ['com', 'net', 'eu', 'de', 'pl', 'uk', 'org'];
  const vendorDomain = ['gmail', 'yahoo', 'onet', 'wp', 'o2', 'ovh', 'xyz', 'az', 'gov'];
  const namaGlue = ['', '.', '_'];
  const nameFirst = getRandomBoolean()

  return [
    getRandomBoolean() ? randomNumber({ min: 1, max: 2000 }) : null,
    nameFirst ? name : surname,
    getRandomBoolean() ? randomNumber({ min: 1, max: 2000 }) : null,
    nameFirst ? surname : name,
    getRandomBoolean() ? randomNumber({ min: 1, max: 2000 }) : null,
    namaGlue[randomNumber({ min: 1, max: namaGlue.length }) - 1],
    '@',
    vendorDomain[randomNumber({ min: 1, max: vendorDomain.length }) - 1],
    '.',
    topLevelDomain[randomNumber({ min: 1, max: topLevelDomain.length }) - 1],
  ].filter(item => item).join('');
};

export const generateRandomDate = (): Date => {
  return new Date(
    randomNumber({ min: 2010, max: 2019 }),
    randomNumber({ min: 0, max: 11 }),
    randomNumber({ min: 0, max: 31 }),
    randomNumber({ min: 0, max: 23 }),
    randomNumber({ min: 0, max: 60 }),
    randomNumber({ min: 0, max: 60 }),
    randomNumber({ min: 0, max: 1000 })
  );
}

export const generateBid = (): IBid => {
  return {
    amount: randomNumber({ min: 2000, max: 25000 }),
    carTitle: carTitlesMock[randomNumber({ min: 1, max: carTitlesMock.length }) - 1],
    created: generateRandomDate().toJSON(),
    id: uuidv1()
  } as IBid
}

export const generateBids = (): IBid[] => {
  const amount = randomNumber({ min: 1, max: 2000 });
  return new Array(amount).fill(null).map(
    () => generateBid()
  )
};

export const generatePhoneNumber = ({ length = 9, withCountryPrefix = true }: { length: 9 | 12, withCountryPrefix: boolean }): string => {
  const countryPrefix = [1, 2, 20, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 27, 28, 284, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 3, 30, 31, 32, 33, 34, 340, 345, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 36, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 39, 4, 40, 41, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 43, 44, 441, 45, 46, 47, 473, 48, 49, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 51, 52, 53, 54, 55, 56, 57, 58, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 6, 60, 61, 62, 63, 64, 649, 65, 658, 66, 664, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 7, 721, 758, 767, 784, 787, 8, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 81, 82, 829, 83, 84, 849, 85, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 86, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 89, 9, 90, 91, 92, 93, 939, 94, 95, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 98, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999];
  return [
    withCountryPrefix ? `+${countryPrefix[randomNumber({ min: 1, max: countryPrefix.length }) - 1]}` : null,
    new Array(length).fill(null).map(
      () => randomNumber({ min: 0, max: 9 })
    ).join('')
  ].join('');
}

const generateMerchant = (): IMerchant => {
  const merchnatName = generateHumanName();
  const email = generateHumanEmail(merchnatName);
  return {
    firsName: merchnatName.name,
    lastName: merchnatName.surname,
    avatarUrl: '',
    email,
    hasPremium: getRandomBoolean(),
    id: uuidv1(),
    phone: generatePhoneNumber({
      length: getRandomBoolean() ? 9 : 12,
      withCountryPrefix: getRandomBoolean() ? true : false
    }),
    bids: generateBids()
  }
};

export const mock: IMerchant[] = new Array(200).fill(null).map(
  () => generateMerchant()
);
