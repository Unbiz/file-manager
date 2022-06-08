import fsProm from 'fs/promises';
import path from 'path';

const addNewFile = async (workingDir, filename) => {
  const filepath = path.resolve(workingDir, filename);
  await fsProm.writeFile(filepath, '', { flag: 'wx' });
};

export default addNewFile;