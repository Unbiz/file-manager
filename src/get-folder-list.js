import fsProm from 'fs/promises';
import os from 'os';

const getFolderLIst = async (path) => {
  let filesList = [];
  let foldersList = [];

  const list = await fsProm.readdir(path, { withFileTypes: true })

  list.forEach((item) => {
    if (item.isFile()) {
      filesList.push(item.name);
    } else {
      foldersList.push(item.name);
    }
  });

  let message = '';

  if (!foldersList && !filesList) message = `Directory is empty${os.EOL}`;
  if (foldersList) message += `Folders:${os.EOL}${foldersList.join(', ')}${os.EOL}`;
  if (filesList) message += `Files:${os.EOL}${filesList.join(', ')}${os.EOL}`;

  console.log(message);
};

export default getFolderLIst;