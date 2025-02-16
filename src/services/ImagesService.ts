import axios from 'axios';
import crypto from 'crypto';
import { cloudinaryConfig } from '../utils/EnvConfig';

export const uploadUserAvatar = async (file: File, userId: number) => {
    const uploadPreset = cloudinaryConfig.uploadPreset;
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', `user/avatar/${userId}`);

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/ds14e8hbm/image/upload`,
            formData
        );

        console.log('Upload success:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

export const uploadPostImage = async (file: File, userId: number) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'oplrzgm3');
    formData.append('folder', `user/${userId}/post`);

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/ds14e8hbm/image/upload`,
            formData
        );

        console.log('Upload success:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

export const uploadStoryImage = async (file: File, userId: number) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'oplrzgm3');
    formData.append('folder', `user/${userId}/story`);

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/ds14e8hbm/image/upload`,
            formData
        );

        console.log('Upload success:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

export const uploadGroupImage = async (file: File, groupId: number) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'oplrzgm3');
    formData.append('folder', `group/${groupId}/image`);

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/ds14e8hbm/image/upload`,
            formData
        );

        console.log('Upload success:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

export const uploadGroupChatImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'oplrzgm3');

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/ds14e8hbm/image/upload`,
            formData
        );

        console.log('Upload group chat inmage success:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

const extractPublicId = (url: string): string => {
    const regex = /\/v\d+\/(.+)\.\w+$/; // Tìm phần giữa `/v<number>/` và phần mở rộng
    const match = url.match(regex);
    return match ? match[1] : '';
};


export const deleteImage = async (secureUrl: string) => {
    console.log("delete image called")
    // const cloudName = 'ds14e8hbm';
    // const apiKey = '329519132628277';
    // const apiSecret = 'iR-zdryWfcSpYeGVTLs-EJ4LHU4';

    const apiKey = cloudinaryConfig.apiKey;
    const apiSecret = cloudinaryConfig.apiSecret;
    const cloudName = cloudinaryConfig.cloudName;

    console.log(cloudName)
    

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

    const publicId = extractPublicId(secureUrl);
    console.log(publicId)

    const formData = new FormData();
    formData.append('public_id', publicId);
    formData.append('api_key', apiKey);
    formData.append('timestamp', Math.floor(Date.now() / 1000).toString());

    // Prepare parameters for signature generation
    const params = {
        public_id: publicId,
        api_key: apiKey,
        timestamp: Math.floor(Date.now() / 1000).toString()
    };

    // Generate the signature for the request
    const signature = generateSignature(apiSecret, params);
    formData.append('signature', signature);

    try {
        const response = await axios.post(url, formData);
        console.log('Image deleted successfully:', response);
        return response;
    } catch (error) {
        console.error('Error deleting image:', error);
        throw error;
    }
};

const generateSignature = (apiSecret: string, params: { [key: string]: any }) => {
    const signature = crypto.createHmac('sha256', apiSecret)
        .update(Object.keys(params)
            .sort()
            .map(key => `${key}=${params[key]}`)
            .join('&'))
        .digest('hex');
    return signature;
};
