/**
 * -------------------------------------------------------
 * NebYotta Labs
 * Upload Routes
 * -------------------------------------------------------
 */

const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const uploadController = require("../controllers/uploadController");

/*
|--------------------------------------------------------------------------
| POST /upload
|--------------------------------------------------------------------------
|
| Recibe una imagen llamada "image".
|
*/

router.post(

    "/upload",

    upload.single("image"),

    uploadController.uploadImage

);

module.exports = router;