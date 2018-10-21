import snap7 from 'node-snap7';

export default({ ip, rack, slot }, { dbNumber, start, size }) => (
  new Promise((resolve, reject) => {
    const s7client = new snap7.S7Client();
    s7client.ConnectTo(ip, rack, slot, (err) => { //eslint-disable-line
      if (err) {
        reject(new Error(`Err Code: ${err} - ${s7client.ErrorText(err)}`));
      }
      console.log(`Time: ${new Date()} Connection to IP: ${ip} was OK!!`);

      s7client.DBRead(dbNumber, start, size, (readErr, res) => {  //eslint-disable-line
        if (readErr) {
          reject(new Error(`DBread error. Code: ${readErr} - ${s7client.ErrorText(readErr)}`));
        }
        resolve(res);
        s7client.Disconnect();
      });
    });
  }));
