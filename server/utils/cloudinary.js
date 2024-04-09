import { v2 as cloudinary } from "cloudinary";

const uploadOnCloudinary = async (localFilePath) => {
  try {
    cloudinary.config({
      cloud_name: "dadvcuwkk",
      api_key: "593186932939832",
      api_secret: "PFPudJmXD9rckaWhJ6RP7e7Cf6M",
    });

    if (!localFilePath) {
      return null;
    }

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    return response;
    console.log("File is uploaded on cloudinary,", response.url);
  } catch (error) {
    console.log("Error:", error);
  }
};

export default uploadOnCloudinary;
