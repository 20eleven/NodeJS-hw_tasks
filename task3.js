import csv from 'csvtojson';
import {createReadStream, createWriteStream} from 'fs';

const CSV_FILE_PATH = 'csv/nodejs-hw1-ex2.csv';
const WRITTEN_FILE_PATH = 'txt/task3-cvs-to-json.txt';

const onError = (error) => {
  if(error) return console.error(error.message);
};

const readable = createReadStream(CSV_FILE_PATH);
const writable = createWriteStream(WRITTEN_FILE_PATH);

readable
  .on('error', onError)
  .pipe(csv())
  .pipe(writable)
  .on('error', onError);
