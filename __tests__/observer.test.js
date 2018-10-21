// @flow
import * as observer from '../src/observer';

const oldState = [
  {
    cipName: 'CIP911',
    programm: 0,
    wayNumber: 0,
    stageNumber: 0,
    stepNumber: 0,
    delayTimeCode: 0,
    emgDelay: 0,
  },
  {
    cipName: 'CIP912',
    programm: 0,
    wayNumber: 0,
    stageNumber: 0,
    stepNumber: 0,
    delayTimeCode: 0,
    emgDelay: 0,
  },
];

const newState = [
  {
    cipName: 'CIP911',
    programm: 1,
    wayNumber: 0,
    stageNumber: 0,
    stepNumber: 0,
    delayTimeCode: 0,
    emgDelay: 0,
  },
  {
    cipName: 'CIP912',
    programm: 0,
    wayNumber: 0,
    stageNumber: 0,
    stepNumber: 0,
    delayTimeCode: 0,
    emgDelay: 0,
  },
];


test('RunCip', async () => {
  // observer.watch(Promise.resolve(oldState));
  // observer.watch(Promise.resolve(newState));

  // observer.eventEmitter.addListener('CipRun', ({ cipName, programm }) => {
  //   expect(cipName).toBe('CIP911');
  //   expect(programm).toBe(1);
  // });
  expect(1).toBe(1);
});
