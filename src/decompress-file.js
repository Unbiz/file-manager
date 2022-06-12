import zlib from 'zlib';
import fsProm from 'fs/promises';
import path from 'path';
import util from 'util';
import stream from 'stream';

const decompressFile = async (workingDir, pathToCompressedFile, pathToFile) => {
  const compressFilePath = path.resolve(workingDir, pathToCompressedFile);
  const compressFileName = path.basename(compressFilePath).replace('.br', '');
  const destFolder = path.resolve(workingDir, pathToFile);
  const statDir = await fsProm.lstat(destFolder);

  if (!statDir.isDirectory()) {
    throw new Error('Not a directory');
  }

  const filePath = path.resolve(workingDir, destFolder, compressFileName);
  const file = await fsProm.open(filePath, 'w');
  const compressFile = await fsProm.open(compressFilePath, 'r');
  const readable = compressFile.createReadStream();
  const gzip = zlib.createBrotliDecompress();
  const destination = file.createWriteStream();

  const pipeline = util.promisify(stream.pipeline);
  await pipeline(readable, gzip, destination);

  console.log(`Decompressed ${compressFilePath} to ${filePath}`);
};

export default decompressFile;