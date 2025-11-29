import prisma from "../prisma.js";

export const checkUploadSize = async (req, res, next) => {
    try {
        // Ambil config dari DB
        const config = await prisma.config.findUnique({
            where: { key: "MAX_UPLOAD_SIZE_MB" },
        });

        const maxSizeMB = Number(config?.value || 5); // default 5MB

        // simpan ke req untuk dipakai multer
        req.maxUploadSize = maxSizeMB * 1024 * 1024; // convert ke bytes

        next();
    } catch (err) {
        next(err);
    }
};
