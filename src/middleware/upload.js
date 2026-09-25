/**
 * -------------------------------------------------------
 * NebYotta Labs
 * NBL-001
 * Upload Middleware
 * -------------------------------------------------------
 *
 * Este middleware utiliza Multer para recibir imágenes
 * desde el navegador y guardarlas automáticamente.
 */

const multer = require("multer");
const path = require("path");

/*
|--------------------------------------------------------------------------
| Configuración del almacenamiento
|--------------------------------------------------------------------------
|
| destination:
| Carpeta donde se guardarán las imágenes.
|
| filename:
| Nombre único para evitar sobrescribir archivos.
|
*/

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, "assets/reference");

    },

    filename: (req, file, cb) => {

        const uniqueName =
            Date.now() +
            path.extname(file.originalname);

        cb(null, uniqueName);

    }

});

/*
|--------------------------------------------------------------------------
| Filtro de archivos
|--------------------------------------------------------------------------
|
| Solo permitimos imágenes.
|
*/

const fileFilter = (req, file, cb) => {

    if (file.mimetype.startsWith("image/")) {

        cb(null, true);

    } else {

        cb(new Error("Solo se permiten imágenes."));

    }

};

/*
|--------------------------------------------------------------------------
| Exportamos la configuración.
|--------------------------------------------------------------------------
*/

module.exports = multer({

    storage,

    fileFilter

});