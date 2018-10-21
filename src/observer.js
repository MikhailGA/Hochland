import _ from 'lodash';
import EventEmitter from './plc/EventEmitter';

const eventEmitter = new EventEmitter();

let oldCol = [];

const eventType = [
  {
    name: 'CipRun',
    check: (curItem, oldItem) => (
      curItem.wayNumber && curItem.wayNumber > 0 && curItem.wayNumber !== oldItem.wayNumber),
    action: curItem => eventEmitter.emit('CipRun', curItem),
  },
  {
    name: 'CipStop',
    check: (curItem, oldItem) => (
      curItem.wayNumber && curItem.wayNumber === 0 && curItem.wayNumber !== oldItem.wayNumber),
    action: curItem => eventEmitter.emit('CipStop', curItem),
  },
  {
    name: 'AlarmRun',
    check: (curItem, oldItem) => (
      curItem.emgDelay && curItem.emgDelay === 0 && curItem.emgDelay !== oldItem.emgDelay),
    action: curItem => eventEmitter.emit('AlarmRun', curItem),
  },
  {
    name: 'AlarmStop',
    check: (curItem, oldItem) => (
      curItem.wayNumber && curItem.wayNumber === 0 && curItem.wayNumber !== oldItem.wayNumber),
    action: curItem => eventEmitter.emit('AlarmStop', curItem),
  },
  {
    name: 'changeStep',
    check: (curItem, oldItem) => curItem.stepNumber && curItem.stepNumber !== oldItem.stepNumber,
    action: curItem => eventEmitter.emit('changeStep', curItem),
  },
  {
    name: 'changeStage',
    check: (curItem, oldItem) => curItem.stageNumber && curItem.stageNumber !== oldItem.stageNumber,
    action: curItem => eventEmitter.emit('changeStage', curItem),
  },
];

const generateEvent = (curCip, cip) => {
  const event = _.find(eventType, ({ check }) => check(curCip, cip));
  if (event) event.action(curCip);
};

const watch = async (dataFromPlc) => {
  const newCol = await dataFromPlc;

  if (_.isEqual(oldCol, newCol)) {
    return false;
  }
  if (oldCol.length === 0) {
    oldCol = newCol;
  }
  for (let i = 0; i < oldCol.length; i += 1) {
    generateEvent(newCol[i], oldCol[i]);
  }
  oldCol = newCol;
  return true;
};

export { watch, eventEmitter };
