import prisma from '../utils/prisma.js';
import ApiError from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { successResponse } from '../utils/response.js';

export const createUser = asyncHandler(async (req, res) => {
    const { name, email } = req.body;

    const user = await prisma.user.create({
        data: { name, email }
    });

    return successResponse(res, 201, "User created successfully", user);
});

export const getUsers = asyncHandler(async (req, res) => {
    const users = await prisma.user.findMany();

    return successResponse(res, 200, "Users retrieved successfully", users);
});

export const getUserById = asyncHandler(async (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        throw new ApiError(400, "Invalid user ID");
    }

    const user = await prisma.user.findUnique({
        where: { id },
    });

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    return successResponse(res, 200, "User retrieved successfully", user);
});

export const updateAvatar = asyncHandler(async (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        throw new ApiError(400, "Invalid user ID");
    }

    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    return res.json({
        message: "Upload successful",
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size,
    });

    // const user = await prisma.user.findUnique({
    //     where: { id },
    // });

    // if (!user) {
    //     throw new ApiError(404, "User not found");
    // }

    // const updatedUser = await prisma.user.update({
    //     where: { id },
    //     data: { avatar: req.file.filename },
    // });

    // return successResponse(res, 200, "User retrieved successfully", user);
});

