import zlib from 'zlib';
import fsProm from 'fs/promises';
import path from 'path';

const compressFile = async (workingDir, pathToCompressingFile, pathToArchive) => {
  const filePath = path.resolve(workingDir, pathToCompressingFile);
  const compressFileName = path.basename(filePath) + '.br';
  const compressFilePath = path.resolve(workingDir, pathToArchive, compressFileName);
  const file = await fsProm.open(filePath, 'r');
  const compressFile = await fsProm.open(compressFilePath, 'w');
  const readable = file.createReadStream();
  const gzip = zlib.createBrotliCompress();
  const destination = compressFile.createWriteStream();

  readable.pipe(gzip).pipe(destination);
};

export default compressFile;