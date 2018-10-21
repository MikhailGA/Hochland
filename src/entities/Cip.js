import uuid from 'uuid-js';
import BaseEntity from '../lib/BaseEntity';

export default class CipProgramm extends BaseEntity {
  constructor(CipSystem, programm, wayNumber) {
    super();
    this.id = uuid.create().hex;
    this.CIPsystem = CipSystem;
    this.wayNumber = wayNumber;
    this.programm = programm;
    // this.descriprion = alarmDescription[type];
    this.createdAt = new Date();
  }
}
