import { Request,Response } from "express";
import authorModel from "../model/authorModel";
import booksModels from "../model/booksModels";



const createBooks =async (req:Request,res:Response) => {
    try {
        const {tittle,category,summary} = req.body;
        const myAuthor = await authorModel.findById(req.params.authorBookID);
    } catch (error) {
        return res.status(404).json({
            message:"Couldnt create authors "
        });
    }
};