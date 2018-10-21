#!/usr/bin/env node
import fs from 'fs';
import dbRead from './plc';
import * as observer from './observer';


const buildObj = path => JSON.parse(fs.readFileSync(path, 'utf8'));

const brConfigPath = './src/data/BRConfig.json';
const db500Path = './src/data/DB500.json';

const plcConfig = buildObj(brConfigPath);
const db500 = buildObj(db500Path);

const mainLoop = () => {
  const data = dbRead(plcConfig, db500);
  observer.watch(data);
};

setInterval(mainLoop, 3000);
// mainLoop();

observer.eventEmitter.addListener('changeStep', ({ cipName, stepNumber }) => { console.log(`${cipName}: step ${stepNumber}`); });
observer.eventEmitter.addListener('changeStage', ({ cipName, stepNumber, stageNumber }) => { console.log(`${cipName}: step ${stepNumber} | stage ${stageNumber}`); });
