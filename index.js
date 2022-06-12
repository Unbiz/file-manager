import process from 'process';
import os from 'os';
import readline from 'readline';
import getUserName from './src/get-user-name.js';
import getOsInfo from './src/get-os-info.js';
import getFolderLIst from './src/get-folder-list.js';
import changeFolder from './src/change-folder.js';
import addNewFile from './src/add-new-file.js';
import printFileContent from './src/print-file-content.js';
import renameFile from './src/rename-file.js';
import copyFile from './src/copy-file.js';
import deleteFile from './src/delete-file.js';
import getHash from './src/get-hash.js';
import compressFile from './src/compress-file.js';
import decompressFile from './src/decompress-file.js';

let workingDir = os.homedir();
const userName = getUserName();
const input = process.stdin;
const output = process.stdout;
const rl = readline.createInterface({ input, output });

rl.write(`Welcome to the File Manager, ${userName}!${os.EOL}`);
rl.write(`You are currently in: ${workingDir}${os.EOL}`);

rl.addListener('close', exitProgram);

rl.addListener('line', async (input) => {
  const inputArgsArr = input.split(' ');
  try {
    const command = inputArgsArr[0];
    switch (command) {
      case '.exit':
        exitProgram();
        break;

      case 'os':
        checkArgsCount(inputArgsArr, 1);
        const arg = inputArgsArr[1];
        await getOsInfo(arg);
        break;

      case 'ls':
        checkArgsCount(inputArgsArr, 0);
        await getFolderLIst(workingDir);
        break;

      case 'up':
        checkArgsCount(inputArgsArr, 0);
        workingDir = await changeFolder(workingDir, '..');
        break;

      case 'cd':
        checkArgsCount(inputArgsArr, 1);
        const pathArg = inputArgsArr[1];
        workingDir = await changeFolder(workingDir, pathArg);
        break;

      case 'add':
        checkArgsCount(inputArgsArr, 1);
        const filename = inputArgsArr[1];
        await addNewFile(workingDir, filename);
        break;

      case 'cat':
        checkArgsCount(inputArgsArr, 1);
        const openFilename = inputArgsArr[1];
        await printFileContent(workingDir, openFilename);
        break;

      case 'rn':
        checkArgsCount(inputArgsArr, 2);
        const pathToFile = inputArgsArr[1];
        const newFilename = inputArgsArr[2];
        await renameFile(workingDir, pathToFile, newFilename);
        break;

      case 'cp':
        checkArgsCount(inputArgsArr, 2);
        const pathToCopyingFile = inputArgsArr[1];
        const pathToNewDirectory = inputArgsArr[2];
        await copyFile(workingDir, pathToCopyingFile, pathToNewDirectory);
        break;

      case 'rm':
        checkArgsCount(inputArgsArr, 1);
        const pathToDeletingFile = inputArgsArr[1];
        await deleteFile(workingDir, pathToDeletingFile);
        break;

      case 'mv':
        checkArgsCount(inputArgsArr, 2);
        const pathToMovingFile = inputArgsArr[1];
        const pathToDestDirectory = inputArgsArr[2];
        await copyFile(workingDir, pathToMovingFile, pathToDestDirectory);
        await deleteFile(workingDir, pathToMovingFile);
        break;

      case 'hash':
        checkArgsCount(inputArgsArr, 1);
        const pathToHashingFile = inputArgsArr[1];
        await getHash(workingDir, pathToHashingFile);
        break;

      case 'compress':
        checkArgsCount(inputArgsArr, 2);
        const pathToCompressingFile = inputArgsArr[1];
        const pathToArchive = inputArgsArr[2];
        await compressFile(workingDir, pathToCompressingFile, pathToArchive);
        break;

      case 'decompress':
        checkArgsCount(inputArgsArr, 2);
        const pathToCompressedFile = inputArgsArr[1];
        const pathToDecompressedFile = inputArgsArr[2];
        await decompressFile(workingDir, pathToCompressedFile, pathToDecompressedFile);
        break;

      default:
        console.log('Invalid input');
        break;
    }

    console.log(`You are currently in, ${workingDir}`);
  } catch (error) {
    console.log(`Operation failed: ${error.message}`);
  }
});

function exitProgram() {
  rl.write(`Thank you for using File Manager, ${userName}!`);
  process.exit(0);
}

function checkArgsCount(inputArgsArr, needCount) {
  if (inputArgsArr.length !== needCount + 1) {
    const errorMessage = `Invalid input. Expected ${needCount} arguments, but got ${inputArgsArr.length - 1}`;
    throw new Error(errorMessage);
  }
}