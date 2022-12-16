
import * as AWS from '../services/aws';

export class adminsrevice {
  

AddItem_toDB_and_s3(file:any,body:any) {

    const fileBuffer =file.buffer;
    AWS.upload_images(body.name,fileBuffer).then((accepted) => {
     console.log("successfully sand at " + accepted);
   }).catch((rejected) => {
     console.log("rejected");
   });
   
}

}