import React, { useState } from 'react';
import { uploadImage } from '../services/uploadImages/uploadImage';

const ImageUpload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (selectedFile) {
            try {
                const result = await uploadImage(selectedFile);
                console.log('Uploaded image URL:', result.secure_url);
            } catch (error) {
                console.error('Upload failed:', error);
            }
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Image</button>
        </div>
    );
};

export default ImageUpload;
