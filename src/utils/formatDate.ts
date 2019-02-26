import * as moment from 'moment';

export const formatDate = (date: Date): string => moment(date).format('DDMMMYYYY HH:mm:ss');
