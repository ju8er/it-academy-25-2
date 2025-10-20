const fs = require('fs-extra');

fs.ensureFileSync('./new folder/file.txt');
fs.ensureDirSync('./new folder1');
fs.moveSync('./new folder/file.txt', './new folder1/file.txt');
fs.ensureDirSync('./new folder2');
fs.copySync('./new folder1/file.txt', './new folder2/file.txt');
fs.removeSync('./new folder');
fs.removeSync('./new folder1/file.txt');
fs.removeSync('./new folder1');
fs.removeSync('./new folder2');