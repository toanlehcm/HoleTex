const express = require("express");
const React = require("react");
const { renderToPipeableStream } = require("react-dom/server");
const Readable = require("stream");
const App = require("./App");

const app = express();

app.get("/", (req, res) => {
  let didError = false;
  const stream = renderToPipeableStream(React.createElement(App), {
    onShellReady() {
      res.statusCode = didError ? 500 : 200;
      res.setHeader("Content-type", "text/html");
      res.write(
        `<!DOCTYPE html><html><head><title>React 18 SSR</title></head><body>`
      );
      stream.pipe(res);
    },
    onAllReady() {
      res.end("</body></html>");
    },
    onError(err) {
      didError = true;
      console.error(err);
    },
  });
});

app.listen(3002, () =>
  console.log("React 18 SSR running at http://localhost:3002")
);
