import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)   // modify it by looking documentation.
    }
  })
  
  export const upload = multer({ 
    storage: storage,
 })