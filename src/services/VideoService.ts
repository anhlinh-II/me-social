import axios from 'axios';
import { cloudinaryConfig } from '../utils/EnvConfig';

const uploadPreset = cloudinaryConfig.uploadPreset;


export const uploadReelVideo = async (file: File, userId: number) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', `user/${userId}/reel`);

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/ds14e8hbm/video/upload`,
            formData
        );

        console.log('Response from Cloudinary:', response);
        return response.data;
    } catch (error) {
        console.error('Error uploading video:', error);
        throw error;
    }
};

export const uploadStoryVideo = async (file: File, userId: number) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', `user/${userId}/story`);
    formData.append('eager', JSON.stringify([{ width: 480, height: 270, crop: 'limit' }]));

    try {
        console.log("code run here 1")
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/ds14e8hbm/video/upload`,
            formData
        );

        console.log('Response from Cloudinary:', response);
        return response.data;
    } catch (error) {
        console.error('Error uploading video:', error);
        throw error;
    }
};

export const uploadPostVideo = async (file: File, userId: number) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'oplrzgm3');
    formData.append('folder', `user/${userId}/post`);

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/ds14e8hbm/video/upload`,
            formData
        );

        console.log('Response from Cloudinary:', response);
        return response.data;
    } catch (error) {
        console.error('Error uploading video:', error);
        throw error;
    }
};