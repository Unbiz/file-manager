import zlib from 'zlib';
import fsProm from 'fs/promises';
import path from 'path';
import util from 'util';
import stream from 'stream';

const compressFile = async (workingDir, pathToCompressingFile, pathToArchive) => {
  const filePath = path.resolve(workingDir, pathToCompressingFile);
  const compressFileName = path.basename(filePath) + '.br';
  const compressFilePath = path.resolve(workingDir, pathToArchive, compressFileName);
  const file = await fsProm.open(filePath, 'r');
  const compressFile = await fsProm.open(compressFilePath, 'w');
  const readable = file.createReadStream();
  const gzip = zlib.createBrotliCompress();
  const destination = compressFile.createWriteStream();

  const pipeline = util.promisify(stream.pipeline);
  await pipeline(readable, gzip, destination);

  console.log(`Compressed ${filePath} to ${compressFilePath}`);
};

export default compressFile;