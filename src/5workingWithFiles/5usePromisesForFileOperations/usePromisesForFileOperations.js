import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // так можно сделать полный путь к файлу в ES модулях
const __dirname = path.dirname(__filename); // так можно сделать полный путь к папке файла в ES модулях
// console.log(__filename, __dirname);

const filePath = path.join(__dirname, "../../../public/121.txt");

// data.then(console.log).catch(console.log);

export const usePromisesForFileOperations = async () => {
  console.log(process.cwd());
  try {
    await fs.writeFile(filePath, "dataepta");

    const data = await fs.readFile(filePath, "utf8");

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

usePromisesForFileOperations();