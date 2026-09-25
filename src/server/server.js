/**
 * NebYotta Labs
 * Server
 */

const app = require("../app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log("======================================");
    console.log(" NebEngine iniciado correctamente");
    console.log(" Proyecto : NBL-001");
    console.log(" Puerto   :", PORT);
    console.log("======================================");

});