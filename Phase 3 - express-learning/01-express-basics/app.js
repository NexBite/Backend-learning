import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/products", (req, res) => {

  console.log("Method:" , req.method);
  console.log("URL:",req.url);
  res.send("Products Page");
});

app.get("/users", (req, res) => {
    res.send("Users Page");
});
// categories page
app.get("/category", (req, res) => {
  console.log("Method" , req.method);
  console.log("Url :",req.url);
  res.send("This is category page")

});
// order page
app.get("/order",(req, res) => {
  console.log("Method",req.method);
  console.log("Url",req.url);
  res.send("This is order page");

});
// contact page

app.get("/contact",(req, res) =>{
  console.log("Method", req.method);
  console.log("url",req.url);
  res.send("This is contact page");
} );

// about page
app.get("/about",(req, res) => {
  console.log("Method", req.method);
  console.log("url", req.url);
  res.send("This is about page");
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});