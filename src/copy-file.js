import fsProm from 'fs/promises';
import path from 'path';

const copyFile = async (workingDir, pathToFile, pathToNewDirectory) => {
  const baseFilePath = path.resolve(workingDir, pathToFile);
  const filename = path.basename(baseFilePath);
  const newFilePath = path.join(workingDir, pathToNewDirectory, filename);
  const file = await fsProm.open(baseFilePath, 'r');
  const newFile = await fsProm.open(newFilePath, 'w');
  const readStream = file.createReadStream();
  const writeStream = newFile.createWriteStream();
  readStream.pipe(writeStream);
};

export default copyFile;