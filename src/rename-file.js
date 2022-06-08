import fsProm from 'fs/promises';
import path from 'path';

const renameFile = async (workingDir, pathToFile, newFilename) => {
  const baseFilePath = path.resolve(workingDir, pathToFile);
  const renamedFilePath = path.resolve(workingDir, newFilename);
  await fsProm.rename(baseFilePath, renamedFilePath);
};

export default renameFile;