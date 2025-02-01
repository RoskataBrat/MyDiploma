import React from "react";
import categoryMapping from "../../../client/src/Components/CategoryMapping";

const submitProduct = (product) => {
  const { name, category, price, stock } = product;

  // Dynamically determine the category component
  const categoryPath = categoryMapping[category];

  if (!categoryPath) {
    console.error(`Category "${category}" is not recognized.`);
    return;
  }

  // Use dynamic import to load the correct component
  import(`../${categoryPath}`)
    .then((CategoryComponent) => {
      // Assuming each component has a method to handle new products
      if (CategoryComponent.addProduct) {
        CategoryComponent.addProduct({ name, price, stock });
      } else {
        console.error("Category component does not support adding products.");
      }
    })
    .catch((error) => console.error("Error loading category component:", error));
};

export default submitProduct;
