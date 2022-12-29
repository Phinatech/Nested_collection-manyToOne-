import mongoose from "mongoose";

interface books {
  title: string;
  coverImage: string;
  category: string;
  summary: string;
  authorName: string;
}

interface ibooks extends books, mongoose.Document {}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  coverImage: {
    type: String,
  },

  category:{
    type:String,
    required:true,
  },
  summary: {
    type: String,
  },
  authorName: {
    type: String,
  },
});

const booksModels = mongoose.model<ibooks>("bookCollection", bookSchema);

export default booksModels;
