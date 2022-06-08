import fsProm from 'fs/promises';

const getFolderLIst = async (path) => {
  let filesList = '';
  let foldersList = '';

  const list = await fsProm.readdir(path, { withFileTypes: true })

  list.forEach((item) => {
    if (item.isFile()) {
      filesList += `${item.name}\n`;
    } else {
      foldersList += `${item.name}\n`;
    }
  });

  let message = '';

  if (!foldersList && !filesList) message = 'Directory is empty\n';
  if (foldersList) message += `Folders:\n${foldersList}`;
  if (filesList) message += `Files:\n${filesList}`;

  console.log(message);
};

export default getFolderLIst;