import React, { useState } from 'react'
import { images } from '../../../utils/customFn';
import './uploadmulti_img.scss'
import { CrossIcon } from '../../../icons/icons';
const UploadMultiImg = () => {
    const [uploadedImages, setUploadedImages] = useState([]);

    const handleFileSelect = (event) => {
        const files = Array.from(event.target.files);
        const newImageUrls = files.map((file) => ({
            url: URL.createObjectURL(file),
            name: file.name,
        }));

        setUploadedImages((prevImages) => [...prevImages, ...newImageUrls]);
    };
    const removeImage = (index) => {
        setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };
    return (
            <div className="multi-upload-container">
                {/* Render uploaded images */}
                {uploadedImages.map((image, index) => (
                    <div key={index} className="image-box" >
                        <img src={image.url} alt={image.name} />
                        <button type='button'   onClick={() => removeImage(index)} className='bg-transparent remove'><CrossIcon/></button>
                    </div>
                ))}

                {/* Upload Dummy Box */}
                <div className="border-box">
                    <label htmlFor="file-upload">
                        <img src={images['add-gallery.svg']} alt="upload" className="upload-icon" />
                    </label>
                    <input
                        type="file"
                        id="file-upload"
                        accept="image/*"
                        multiple
                        onChange={handleFileSelect}
                    />
                </div>
            </div>
    )
}

export default UploadMultiImg;
