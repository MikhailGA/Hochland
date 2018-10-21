import uuid from 'uuid-js';
import BaseEntity from '../lib/BaseEntity';

const alarmDescription = {
  0: '',
  1: 'emergency stop manual',
  2: 'Emergency stop tank capacity',
  3: 'Emergency stop CT CIP-tanks',
  4: 'emergency stop valves',
  5: 'emergency stop motors',
  6: 'emergency stop flow force pumps',
  7: 'emergency stop acknowledgement line',
  8: 'emergency stop attention time CT',
  9: 'emergency stop flow return pumps',
  10: 'emergency stop push button "emergency stop"',
  11: 'emergency stop KS',
  12: 'emergency stop vacuum tank',
  13: 'emergency stop mixing tank',
  14: 'emergency stop Dosomat',
  15: 'emergency stop Mondomix',
  16: 'emergency stop low pressure steam',
  17: 'emergency stop reception',
};

export default class Alarm extends BaseEntity {
  constructor(cip, type) {
    super();
    this.id = uuid.create().hex;
    this.cip = cip;
    this.type = type;
    this.descriprion = alarmDescription[type];
    this.start = new Date();
  }

  finish() {
    this.finish = new Date();
  }
}
