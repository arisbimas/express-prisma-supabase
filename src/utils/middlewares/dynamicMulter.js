import fs from 'fs';
import path from 'path';
import multer from 'multer';

const uploadDir = path.join(process.cwd(), 'uploads');

// Buat folder uploads kalo belum ada
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Konfigurasi Multer untuk menyimpan file ke disk
export const dynamicMulter = (maxUploadSize) => {

    return multer({
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, uploadDir);
            },
            filename: (req, file, cb) => {
                const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
                cb(null, uniqueName + path.extname(file.originalname));
            },
        }),
        limits: {
            fileSize: maxUploadSize,
        },
        fileFilter: (req, file, cb) => {
            cb(null, true);
        },
    });
};
