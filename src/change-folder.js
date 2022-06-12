import fsProm from 'fs/promises';
import path from 'path';
import { constants } from 'node:fs';

const changeFolder = async (workingDir, pathArg) => {
  const newWorkingDir = path.resolve(workingDir, pathArg);
  const statDir = await fsProm.lstat(newWorkingDir);
  if (statDir.isDirectory()) {
    return newWorkingDir;
  } else {
    throw new Error('Not a directory');
  }
};

export default changeFolder;