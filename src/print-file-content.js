import fsProm from 'fs/promises';
import fs from 'fs';
import path from 'path';
import os from 'os';
import util from 'util';
import stream from 'stream';

const printFileContent = async (workingDir, filename) => {
  const filePath = path.resolve(workingDir, filename);

  const readable = fs.createReadStream(filePath);
  readable.pipe(process.stdout);

  const finished = util.promisify(stream.finished);
  await finished(readable);

  process.stdout.write(os.EOL);
};

export default printFileContent;