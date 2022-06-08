import fsProm from 'fs/promises';
import path from 'path';
import os from 'os';

const printFileContent = async (workingDir, filename) => {
  const filePath = path.resolve(workingDir, filename);
  const file = await fsProm.open(filePath, 'r');
  const readable = file.createReadStream();

  readable.on('end', () => {
    process.stdout.write(os.EOL);
  });

  readable.pipe(process.stdout);
};

export default printFileContent;