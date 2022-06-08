import fsProm from 'fs/promises';
import path from 'path';

const deleteFile = async (workingDir, pathToFile) => {
  const deletedFilePath = path.resolve(workingDir, pathToFile);
  await fsProm.rm(deletedFilePath);
};

export default deleteFile;