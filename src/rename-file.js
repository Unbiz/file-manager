import fsProm from 'fs/promises';
import path from 'path';
import { constants } from 'node:fs';

const renameFile = async (workingDir, pathToFile, newFilename) => {
  const baseFilePath = path.resolve(workingDir, pathToFile);
  const renamedFilePath = path.resolve(workingDir, newFilename);

  try {
    await fsProm.access(renamedFilePath, constants.F_OK);
    console.log('Operation failed: File with new filename already exists');
  } catch (error) {
    await fsProm.rename(baseFilePath, renamedFilePath);
  }
};

export default renameFile;