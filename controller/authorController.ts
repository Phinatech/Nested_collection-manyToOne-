import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cloudinary from "../config/Cloudinary";
import authorModel from "../model/authorModel";


//Creating all authors
const Posting = async (req: Request, res: Response): Promise<Response> => {
  try {
    const cloudImg = await cloudinary.uploader.upload(req?.file!.path)
    // console.log(req.file)
    const {authorImg,bio,authorName} = req.body;
    const PostingAuthor = await authorModel.create({
      authorImg:cloudImg.secure_url,
      bio: bio? bio:`welcome to  ${authorName} bookstore`,
      authorName,
    });
    return res.status(201).json({
      message: "Successfully gotten Data",
      data: PostingAuthor,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Couldn't Create authors ",
      
    });
  }
};

//getting All authors
const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const GettingAllBooks = await authorModel.find();
    return res.status(200).json({
      message: "All books gotten successfully",
      data: GettingAllBooks,
    });
  } catch (error) {
    return res.status(404).json({
      message: "An error occured",
      data: error,
    });
  }
};

//Get one author
const getOneAuthors =async (req:Request,res:Response):Promise<Response> => {
    try {
       const authorDetails = await authorModel.findById(req.params.authorID) 
       return res.status(200).json({
        message:`${req.params.authorID} Gotten Successfully`,
        data: authorDetails
       })
    } catch (error) {
        return res.status(404).json({
            message:"Could not get Authors",
            data:error
        })
    }
}

const UpdatingAuthors =async (req:Request,res:Response):Promise<Response> => {
 try {
    const {bio} = req.body
    const Updating = await authorModel.findByIdAndUpdate(req.params.authorID,
        {
            bio,
            
        },
    {new:true})
    return res.status(200).json({
        message:"Authos has been Updated",
        data:Updating
    })
 } catch (error) {
    return res.status(404).json({
      message: "Could not Updata Authors",
      data: error,
    });
 }   
}

const Deleting =async (req:Request,res:Response):Promise<Response> => {
    try {
        const DeleteAuthors = await authorModel.findByIdAndDelete(req.params.authorID)
        return res.status(200).json({
            message:"Author books deleted",
            data:DeleteAuthors
        })
    } catch (error) {
         return res.status(404).json({
            message: "Could not Updata Authors",
            data: error,
        });
    }
}

export {Posting,getAll,getOneAuthors,UpdatingAuthors,Deleting}