import fsProm from 'fs/promises';
import path from 'path';

const copyFile = async (workingDir, pathToFile, pathToNewDirectory) => {
  const baseFilePath = path.resolve(workingDir, pathToFile);
  const filename = path.basename(baseFilePath);
  const newFilePath = path.join(workingDir, pathToNewDirectory, filename);
  await fsProm.copyFile(baseFilePath, newFilePath);
};

export default copyFile;