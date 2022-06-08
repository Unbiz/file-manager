import zlib from 'zlib';
import fsProm from 'fs/promises';
import path from 'path';

const decompressFile = async (workingDir, pathToCompressedFile, pathToFile) => {
  const compressFilePath = path.resolve(workingDir, pathToCompressedFile);
  const compressFileName = path.basename(compressFilePath).replace('.br', '');
  const filePath = path.resolve(workingDir, pathToFile, compressFileName);
  const file = await fsProm.open(filePath, 'w');
  const compressFile = await fsProm.open(compressFilePath, 'r');
  const readable = compressFile.createReadStream();
  const gzip = zlib.createBrotliDecompress();
  const destination = file.createWriteStream();

  readable.pipe(gzip).pipe(destination);
};

export default decompressFile;