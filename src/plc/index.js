import _ from 'lodash';
import getDB from './plcAdapter';

const typeMappin = {
  int16: (buffer, offset) => buffer.readInt16BE(offset),
  bool: (buffer, offset) => buffer[offset],
};

const getData = (buf, item) => {
  const keys = Object.keys(item);
  return keys.reduce((acc, key) => {
    if (!_.isObject(item[key])) {
      return { ...acc, [key]: item[key] };
    }
    const { offset, type } = item[key];
    const value = typeMappin[type](buf, offset);
    return { ...acc, [key]: value };
  }, {});
};

export default async (plcConfig, db) => {
  const dataBuffer = await getDB(plcConfig, db.config);
  return db.meta.map(item => getData(dataBuffer, item));
};
