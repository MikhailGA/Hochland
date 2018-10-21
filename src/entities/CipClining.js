import uuid from 'uuid-js';
import BaseEntity from '../lib/BaseEntity';

export default class CipClining extends BaseEntity {
  constructor(cipProgramm, stepNumber, alarms = []) {
    super();
    this.id = uuid.create().hex;
    this.cipProgramm = cipProgramm;
    this.alarm = alarms;
    this.stepNumber = stepNumber;
    this.createdAt = new Date();
  }

  finish() {
    this.finishedAt = new Date();
  }
}
