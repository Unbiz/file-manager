const getHelp = async () => {
  console.log(`
    Navigation & working directory:
      up: go upper from current directory (when you are in the root folder this operation shouldn't change working directory)
      cd path_to_directory: go to dedicated folder from current directory (path_to_directory can be relative or absolute)
      ls: list all files and folder in current directory and print it to console
    Basic operations with files:
      cat path_to_file: read file and print it's content in console
      add new_file_name: create empty file in current working directory
      rn path_to_file new_filename: rename file
      cp path_to_file path_to_new_directory: copy file
      mv path_to_file path_to_new_directory: move file (same as copy but initial file is deleted)
      rm path_to_file: Delete file
    Operating system info (prints following information in console):
      os --EOL: get EOL (default system End-Of-Line)
      os --cpus: get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)
      os --homedir: get home directory
      os --username: get current system user name (if you don't input any argument it will print user name from system)
      os --architecture: get CPU architecture for which Node.js binary has compiled
    Hash calculation:
      hash path_to_file: calculate hash for file and print it into console
    Compress and decompress operations:
      compress path_to_file path_to_destination_directory: compress file (using Brotli algorytm)
      decompress path_to_file path_to_destination_directory: decompress file (using Brotli algorytm)
  `);
};

export default getHelp;