import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // так можно сделать полный путь к файлу в ES модулях
const __dirname = path.dirname(__filename); // так можно сделать полный путь к папке файла в ES модулях
console.log(__filename, __dirname);

const filePath = path.join(__dirname, "../../../public/3.txt");

export const writeFileTest = () => {
  fs.appendFile(filePath, "\n456", (err, data) => {
    if (err) {
      console.log(err);

      return;
    }

    console.log(data);
  });
};
