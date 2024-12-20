import { useState } from "react";
import { uploadImage } from "../../services/ImagesService";

const ImageUploader: React.FC = () => {
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
                const result = await uploadImage(selectedFile);
                console.log('Uploaded image data:', result);
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
        <div className="image-uploader">
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload Image'}
            </button>
        </div>
    );
};

export default ImageUploader;