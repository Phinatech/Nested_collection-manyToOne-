import multer from "multer";
import {Request} from "express"

type DestinationCallBack = (error: Error | null, destination: string) => void
type filenameCallback = (error: Error | null, destination: string) => void 
const desStorage = multer.diskStorage({
    destination:(
        req:Request,
        file:Express.Multer.File,
        cb:DestinationCallBack 
    ) => {
        cb(null,"uploads")
    },

    filename:(
        req:Request,
        file:Express.Multer.File,
        cb:filenameCallback
    ) =>{
        cb(null,file.originalname)
    }
});

const coverBookImg = multer({ storage: desStorage }).single("coverImage");

const authorImageCover = multer({
  storage: desStorage,
}).single("authorImg");

export {coverBookImg,authorImageCover}