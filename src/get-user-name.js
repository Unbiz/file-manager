import os from 'os';
import process from 'process';
const userNameArgsPrefix = '--username=';

const getUserName = () => {
  let userName = os.userInfo().username;
  const argsStr = process.argv.slice(2);

  if (argsStr.length > 0 && argsStr[0].startsWith(userNameArgsPrefix)) {
    userName = argsStr[0].replace(userNameArgsPrefix, '');
  }

  return userName;
};

export default getUserName;