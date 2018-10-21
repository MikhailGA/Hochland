// @flow
import * as observer from '../src/observer';

const oldState = [
  {
    name: 'CIP911',
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
    name: 'CIP911',
    programm: 2,
    wayNumber: 1,
    stageNumber: 0,
    stepNumber: 0,
    delayTimeCode: 0,
    emgDelay: 0,
  },
];


test('RunCip', async () => {
  observer.watch(Promise.resolve(oldState));
  observer.watch(Promise.resolve(newState));
  expect.assertions(2);
  observer.eventEmitter.addListener('CipRun', (cip) => {
    expect(cip.name).toBe('CIP911');
    expect(cip.programm).toBe(2);
  });
});
