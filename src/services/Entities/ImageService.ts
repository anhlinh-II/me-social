import axios from 'axios';

// Hàm tải lên ảnh
export const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'preset');
    formData.append('folder', 'logo');

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/cloud_name/image/upload`,
            formData
        );

        console.log('Upload success:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};
