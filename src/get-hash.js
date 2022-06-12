import crypto from 'crypto';
import fsProm from 'fs/promises';
import path from 'path';
import util from 'util';
import stream from 'stream';

const getHash = async (workingDir, pathToFile) => {
  const fullFilePath = path.resolve(workingDir, pathToFile);
  const file = await fsProm.open(fullFilePath, 'r');
  const readStream = file.createReadStream();
  const hash = crypto.createHash('sha256').setEncoding('hex');
  const pipeline = util.promisify(stream.pipeline);
  await pipeline(readStream, hash);
  console.log(`Hash of ${fullFilePath} is ${hash.read()}`);
};

export default getHash;