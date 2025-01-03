import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        // Upload the file on cloudinary
        const response =  await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
        });
        // File uploaded successfully on cloudinary
        console.log("File uploaded successfully on cloudinary", response.url);
        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath) // Delete the locally saved temporary file as upload failed
        return null;
    }
}

export { uploadOnCloudinary }
