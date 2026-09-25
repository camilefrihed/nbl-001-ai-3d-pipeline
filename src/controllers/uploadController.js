/**
 * -------------------------------------------------------
 * NebYotta Labs
 * Upload Controller
 * -------------------------------------------------------
 *
 * Responde cuando una imagen fue recibida correctamente.
 */

exports.uploadImage = (req, res) => {

    res.json({

        success: true,

        message: "Imagen recibida correctamente.",

        filename: req.file.filename,

        path: req.file.path

    });

};