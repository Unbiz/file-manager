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

  let message = os.EOL;

  if (list.length === 0) {
    message += `Directory is empty${os.EOL}`
  } else {
    if (foldersList) message += `Folders:${os.EOL}${foldersList.join(', ')}${os.EOL}`;
    if (filesList) message += `Files:${os.EOL}${filesList.join(', ')}${os.EOL}`;
  }

  console.log(message);
};

export default getFolderLIst;