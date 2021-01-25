const server = require("./api/server.js");

const PORT = 1700;

server.listen(PORT, () => {
    console.log("server works");
});
