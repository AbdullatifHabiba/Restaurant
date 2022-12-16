
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
const fs = require('fs')
dotenv.config();
const credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;
const buc= process.env.bucket;

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: 'us-east-1',
  params: {Bucket:buc},
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl( key: string ): string {
    const signedUrlExpireSeconds = 60 * 5;
  
    return s3.getSignedUrl('getObject', {
      Bucket:buc,
      Key: key,
      Expires: signedUrlExpireSeconds,
    });
  }
  
  // Generates an AWS signed URL for uploading objects
  export function getPutSignedUrl( key: string ): string {
    const signedUrlExpireSeconds = 60 * 5;
  
    return s3.getSignedUrl('putObject', {
      Bucket: buc,
      Key: key,
      Expires: signedUrlExpireSeconds,
    });
  }

  const imageURL = 'G:/Fifth Term/Software Engineering/Project/Frontend/restaurant/public/Images/Bignine.jfif'
  let blob :any={};


  export function upload_images( key: string ,blob:any) {
    const fileStream = fs.createReadStream(imageURL);

    return s3.upload({
      Bucket: buc!,
      Body: blob,
      Key: key,
    }).promise()

  }
  export function getFileStream(fileKey:any) {
  return s3.getObject({
    Key: fileKey,
    Bucket: buc!,
  }).createReadStream();
  }
  

export { AWS };
  //export function upload_image(){
    
  //}
  