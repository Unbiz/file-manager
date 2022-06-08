import crypto from 'crypto';
import fsProm from 'fs/promises';
import path from 'path';

const getHash = async (workingDir, pathToFile) => {
  const fullFilePath = path.resolve(workingDir, pathToFile);
  const fileText = await fsProm.readFile(fullFilePath, 'utf8');
  const hash = crypto.createHash('sha256').update(fileText).digest('hex');
  console.log(`Hash of ${fullFilePath} is ${hash}`);
};

export default getHash;