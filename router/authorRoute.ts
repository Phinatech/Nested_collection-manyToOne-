import {Router} from "express";
import { getAll, Posting } from "../controller/authorController";
import { authorImageCover } from "../config/Multer";
const router = Router();

router.route("/").get(getAll)
router.route("/:authorID").get(getAll)
router.route("/newAuthor").post(authorImageCover, Posting);


export default router