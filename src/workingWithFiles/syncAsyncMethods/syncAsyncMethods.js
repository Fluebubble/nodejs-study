import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // так можно сделать полный путь к файлу в ES модулях
const __dirname = path.dirname(__filename); // так можно сделать полный путь к папке файла в ES модулях
console.log(__filename, __dirname);

const filePath = path.join(__dirname, "../../../public/1.txt");

export const readFileTest = () => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);

      return;
    }

    console.log(data);
  });

  // try {
  //   const data = fs.readFileSync(filePath, "utf8");

  //   console.log(data);
  //   console.log("after");
  // } catch (err) {
  //   console.log(err);
  // }

  console.log("after");
};
