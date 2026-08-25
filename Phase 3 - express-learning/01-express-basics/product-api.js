import express from "express";

const app = express();

const PORT = 5000;

app.use(express.json());
// temporly data
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 60000
    },
    {
        id: 2,
        name: "Keyboard",
        price: 1500
    }
];

// get all produts

app.get("/products", (req, res) =>{
  res.json(products);
});

// get one product

app.get("/products/:id",(req, res) =>{
  const id = Number(req.params.id);
  const product = products.find(product => product.id ===id);

  if(!product){
    return res.status(400).json({message: "Product not found"});
  };
res.json(product);
});

// post product

app.post("/products",(req,res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };

  products.push(newproduct);
  res.status(201).json(newProduct);
});

// Delete product
app.delete("/products/:id",(req, res) =>{

const id = Number(req.params.id);

const index = products.findIndex(product => product.id === id);

if(index == -1){
  return res.status(404).json({
    message: "Product not found"
  });
}
const deleteProduct = products.splice(index, 1);

res.json({
  message: "Product delete",
  product: deleteProduct[0],
});


});

//  PATCH 
app.patch("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, price } = req.body;

 
  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = price;

  res.json({
    message: "Product updated successfully",
    product
  });
});

// PUT 
app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, price } = req.body;

  if (!name || price === undefined) {
    return res.status(400).json({ message: "Both name and price are required for full replacement" });
  }

  // Entirely overwrite the old object at index
  products[index] = {
    id,
    name,
    price
  };

  res.json({
    message: "Product replaced successfully",
    product: products[index]
  });
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


