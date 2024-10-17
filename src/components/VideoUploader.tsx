import React, { useState } from 'react';
import { uploadVideo } from '../services/Entities/VideoService';

const VideoUploader: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (selectedFile) {
            setUploading(true);
            try {
                const result = await uploadVideo(selectedFile);
                console.log('Uploaded video data:', result);
            } catch (error) {
                console.error('Upload failed:', error);
            } finally {
                setUploading(false);
            }
        } else {
            alert('Please select a file first.');
        }
    };

    return (
        <div className="video-uploader">
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload Video'}
            </button>
            <video controls autoPlay src='https://res.cloudinary.com/ds14e8hbm/video/upload/v1729146600/video/rf1k8nojub9hjj1iagxw.mp4'></video>
        </div>
    );
};

export default VideoUploader;