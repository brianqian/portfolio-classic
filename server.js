// const express = require("express");
// const path = require("path");

// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// const source = process.env.NODE_ENV === "production" ? "build" : "public";
// app.use(express.static(`client/${source}`));

// app.get("/test/test", (req, res) => {
//   console.log("testing", source);
// });

// app.get("*", (req, res) => {
//   console.log("sending file", source);
//   res.sendFile(path.resolve(__dirname + `/client/${source}/index.html`));
// });

// app.listen(PORT, () => {
//   console.log(`Listening on port: ${PORT}`);
// });
