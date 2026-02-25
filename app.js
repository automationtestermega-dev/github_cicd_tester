const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Git & GitHub Demo</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                margin-top: 50px;
            }
            button {
                padding: 10px 20px;
                margin: 10px;
                font-size: 16px;
                cursor: pointer;
            }
            #content {
                margin-top: 30px;
                font-size: 18px;
                width: 60%;
                margin-left: auto;
                margin-right: auto;
            }
        </style>
    </head>
    <body>
        <h1>Learn Git & GitHub</h1>

        <button onclick="showGit()">Git</button>
        <button onclick="showGitHub()">GitHub</button>
        <button onclick="showActions()">GitHub Actions</button>

        <div id="content"></div>

        <script>
            function showGit() {
                document.getElementById("content").innerText =
                    "Git is a distributed version control system used to track changes in source code.";
            }

            function showGitHub() {
                document.getElementById("content").innerText =
                    "GitHub is a cloud platform that hosts Git repositories for collaboration.";
            }

            function showActions() {
                document.getElementById("content").innerText =
                    "GitHub Actions is a CI/CD tool used to automate testing and deployment workflows.";
            }
        </script>
    </body>
    </html>
  `);
});

// Export app for testing
module.exports = app;

// Only start server if not running tests
if (require.main === module) {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}