import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

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

    console.log("File is uploaded on cloudinary,", response.url);

    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log("Error:", error);
    return null;
  }
};

export default uploadOnCloudinary;
