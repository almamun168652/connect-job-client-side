// app.put("/coffee/update/:id", async (req, res) => {
//     const id = req.params.id;
//     const coffee = req.body;
//     const filter = { _id: new ObjectId(id) };
//     const options = { upsert: true };
//     const updateCoffee = {
//       $set: {
//         name: coffee.name,
//         chef: coffee.chef,
//         supplier: coffee.supplier,
//         taste: coffee.taste,
//         category: coffee.category,
//         details: coffee.details,
//         photo: coffee.photo,
//       },
//     };
//     console.log(updateCoffee);
//     const result = await coffeeCollection.updateOne(
//       filter,
//       updateCoffee,
//       options
//     );
//     res.send(result);
//   });