// const http = require("node:http");
// // req and res are objects
// const server = http.createServer((req, res) => {
///////////////////////////
//   res.statusCode;
//   res.setHeader("Content-Type", "text/html"); //by default text/html //application/xml
//   res.write("welcome\n");
//   res.end();
////////////////////////////////////
//   res.write(req.url);
//   res.end();
////////////////////////////////
//   if (req.url == "/home") {
//     res.write("Welcome from home");
//   } else if (req.url == "/contact") {
//     res.write("Welcome from contact");
//   } else if (req.url == "/about") {
//     res.write("Welcome from about");
//   } else {
//     res.statusCode = 404;
//     res.write("Not Found!");
//   }
//   res.end();
// });
// server.listen(5000, () => console.log("server running"));
//////////////////////////////
//   switch (req.url) {
//     case "/home":
//       res.write("Welcome from home");
//       break;

//     case "/contact":
//       res.write("Welcome from contact");
//       break;
//     case "/about":
//       res.write("Welcome from about");
//       break;

//     default:
//       res.statusCode = 404;
//       res.write("Not Found!");
//   }
//   res.end();
// });

// server.listen(5000, () => console.log("server running"));

////////////////////////////////////////////////////////////////
const http = require("node:http");
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/home":
      res.write("Welcome from home");
      break;
    case "/contact":
      res.write("Welcome from contact");
      break;
    case "/about":
      res.write("Welcome from about");
      break;
    default:
      res.statusCode = 404;
      res.write("Heyy not found!!!");
  }
  res.write("\n");
  res.end("end");
});
server.listen(5000, () => console.log("The server is running on port 5000"));
