// const message = "Hello world!";

// console.log(message);

// import fs from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

// const content = fs.readFileSync('src', 'text.txt');
// console.log('content', content);
// console.log('content.toString()', content.toString());
// console.log(process);

const workdir = process.cwd();
// console.log('workdir', workdir);

// const newPath = path.join(workdir, 'src', 'index.js');
// console.log('newPath', newPath);

const fileTextPath = path.join(workdir, 'src', 'text.txt');
// console.log('fileTextPath', fileTextPath);

// const contextFile = fs.readFileSync(fileTextPath);
// console.log(contextFile);
// console.log(contextFile.toString());

// ============= sync method =============
// const contextFile = fs.readFileSync(fileTextPath, 'utf-8');
// console.log(contextFile);

// ============= callback method =============
// fs.readFile(fileTextPath, (err, data) => {
//   fs.writeFile('output.txt', data, (err) => {
//     console.log('wright');
//   });
//   console.log('read');
//   //   console.log('data in file', data);
// });

// console.log('finish');

// ============= Async method =============
const content = await fs.readFile(fileTextPath, 'utf-8');
console.log(content);
