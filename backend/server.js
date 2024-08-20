import express, { json } from "express";
import multer, { diskStorage } from "multer";
import cors from "cors";
import { readFileSync } from "fs";
import path, { join } from "path";
import { fileURLToPath } from "url";
import { pipeline } from '@xenova/transformers';

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.use(cors());
app.use(
  cors({
    origin: ["https://backend-lepide-assignment.vercel.app/"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(json());

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
const pipe = await pipeline("summarization");

app.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const filePath = join(__dirname, "uploads", req.file.filename);
  const fileContent = readFileSync(filePath, "utf-8");

  // summarize
  const result = await pipe(fileContent, { max_length: 30 });
  console.log({ content: result });

  res.status(200).json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
