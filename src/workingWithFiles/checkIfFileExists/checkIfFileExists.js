import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // так можно сделать полный путь к файлу в ES модулях
const __dirname = path.dirname(__filename); // так можно сделать полный путь к папке файла в ES модулях
console.log(__filename, __dirname);

const filePath = path.join(__dirname, "../../../public/1.txt");

export const checkIfFileExists = async () => {
  try {
    await fs.access(filePath);

    console.log("file exists");
  } catch {
    console.log("not exists");
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.log("No such file");
      }

      if (err.code === "EISDIR") {
        console.log("You try to read a directory");
      }
      // console.log(err);

      return;
    }

    console.log(data);
  });
};
