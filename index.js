const server = require("./api/server.js");

const PORT = 1900;

server.listen(PORT, () => {
    console.log("server works");
});
