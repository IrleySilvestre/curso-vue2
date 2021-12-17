const app = require("./src/app");

const port = process.env.port || 3001;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});