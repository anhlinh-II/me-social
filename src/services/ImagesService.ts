import axios from 'axios';
import crypto from 'crypto';

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


export const deleteImage = async (publicId: string) => {
    const cloudName = 'ds14e8hbm';
    const apiKey = '329519132628277';
    const apiSecret = 'iR-zdryWfcSpYeGVTLs-EJ4LHU4';

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

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
        console.log('Image deleted successfully:', response.data);
        return response.data;
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
