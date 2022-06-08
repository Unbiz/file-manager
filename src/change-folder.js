import fsProm from 'fs/promises';
import path from 'path';
import { constants } from 'node:fs';

const changeFolder = async (workingDir, pathArg) => {
  const newWorkingDir = path.resolve(workingDir, pathArg);
  await fsProm.access(newWorkingDir, constants.F_OK);
  return newWorkingDir;
};

export default changeFolder;