// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const bodyParser = require("body-parser");
const xf = require("xfetch-js");
const app = express();

app.use(bodyParser.json());

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/zh", (req, res) => {
  res.sendFile(__dirname + "/views/zh.html");
});

function replace(t, a, b) {
  const reg = new RegExp(String.raw`(${a}: \").*?(\")`);
  return t.replace(reg, "$1" + b + "$2");
}
app.post("/getCode", async (req, res) => {
  const p = req.body;
  const r = await xf
    .post("https://www.googleapis.com/oauth2/v4/token", {
      urlencoded: {
        code: p.authCode,
        client_id: "202264815644.apps.googleusercontent.com",
        client_secret: "X4Z3ca8xfWDb1Voo-F9a7ZxJ",
        redirect_uri: "urn:ietf:wg:oauth:2.0:oob",
        grant_type: "authorization_code"
      }
    })
    .json()
    .catch(e => null);
  if (r === null) {
    return res.status(400).send({
      status: "fail",
      content: "",
      message:
        "Authorization Code is invalid. Perhaps it doesn's exists or it has been used for 1 time."
    });
  }
  let code = await xf
    .get("https://raw.githubusercontent.com/alx-xlx/goindex/2.0.5-darkmode-0.1/goindex-acrou/go2index/index.js")
    .text();
  let options = code.match(
    /\/\/ =======Options START=======([\s\S]*)\/\/ =======Options END=======/
  )[0];
  code = code.replace(options, "");
  options = replace(options, "refresh_token", r.refresh_token);
  for (const [k, v] of Object.entries(p)) {
    if (v === true) {
      options = options.replace(`${k}: false`, `${k}: true`);
    } else if (v === true) {
      options = options.replace(`${k}: true`, `${k}: false`);
    } else if (v instanceof Array) {
      let roots = v.map(item => {
        return {
          ...item,
          protect_file_link: false
        };
      });
      options = options.replace(
        /roots: \[([\s\S]*)\]/,
        '"roots": ' + JSON.stringify(roots, "", "\t")
      );
    } else {
      options = replace(options, k, v);
    }
  }
  res.set("Content-Type", "text/javascript; charset=utf-8");
  res.send({
    status: "success",
    content: options + code,
    message: ""
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
