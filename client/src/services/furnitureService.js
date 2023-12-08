import * as request from "../lib/request";
const baseUrl = "http://localhost:3030/jsonstore/furniture";

// Get all products
export const getAll = async () => {
  const result = await request.get(baseUrl);
  console.log(`${baseUrl}/7e5cdf1c-878d-4184-a0e0-893b0002ccda`);

  return Object.values(result);
};

// Get one product
export const getOne = async (productId) => {
  const result = await request.get(`${baseUrl}/${productId}`);
  return result;
};

// Most bought products
export const getMostBought = async () => {
  try {
    // Fetch all products
    const allProducts = await getAll();

    // Count the number of purchases for each product
    const productCounts = {};
    allProducts.forEach((product) => {
      const productId = product._id;
      const buyersCount = product.buyers ? product.buyers.length : 0;
      productCounts[productId] = buyersCount;
    });

    // Sort the products by the number of purchases
    const sortedProducts = Object.keys(productCounts).sort(
      (a, b) => productCounts[b] - productCounts[a]
    );

    // Get the top three products
    const topThree = sortedProducts.slice(0, 3);

    // Fetch details for the top three products
    const topThreeDetails = await Promise.all(
      topThree.map(async (productId) => await getOne(productId))
    );

    return topThreeDetails;
  } catch (error) {
    console.error("Error fetching most bought products:", error);
    throw error;
  }
};

// Create
export const create = async (productData, _ownerId) => {
  const body = {
    name: productData.name,
    category: productData.category,
    price: productData.price,
    imageUrl: productData.imageUrl,
    measurements: {
      width: productData.width,
      depth: productData.depth,
      height: productData.height,
    },
    description: productData.description,
    articleNumber: productData.articleNumber,
    _ownerId: _ownerId,
  };

  const result = await request.post(baseUrl, body);
  return result;
};

// Edit
export const edit = async (productId, productData, _ownerId) => {
  const body = {
    name: productData.name,
    category: productData.category,
    price: productData.price,
    imageUrl: productData.imageUrl,
    measurements: {
      width: productData.width,
      depth: productData.depth,
      height: productData.height,
    },
    description: productData.description,
    articleNumber: productData.articleNumber,
    _ownerId: _ownerId,
  };

  const result = await request.put(`${baseUrl}/${productId}`, body);
  return result;
};

// Delete
export const remove = async (productId) =>
  request.remove(`${baseUrl}/${productId}`);

// Buy
export const buy = async (productId, userId) => {
  const purchaseUrl = `${baseUrl}/purchase/${productId}/${userId}`;
  const result = await request.post(purchaseUrl);

  // Retrieve the updated product after the purchase
  const updatedProduct = await getOne(productId);

  // Add the buyer's userId to the product's data
  updatedProduct.buyers = updatedProduct.buyers || [];
  updatedProduct.buyers.push(userId);

  // Update the product with the new buyer information
  await request.put(`${baseUrl}/${productId}`, updatedProduct);

  return result;
};

// User's bought products
export const getMyPurchases = async (userId) => {
  try {
    const allProducts = await getAll();

    // Filter products where the user's ID is in the buyers array
    const purchasedProducts = allProducts.filter(
      (product) => product.buyers && product.buyers.includes(userId)
    );

    return purchasedProducts;
  } catch (error) {
    console.error("Error fetching user's purchased products:", error);
    throw error;
  }
};

// Validators for numbers <= 0
const genericValidator = (value, condition, errorMessage, setErrors) => {
  if (condition(value)) {
    setErrors((state) => ({
      ...state,
      [errorMessage.field]: errorMessage.message,
    }));
  } else {
    setErrors((state) => ({ ...state, [errorMessage.field]: "" }));
  }
};

export const validatePositiveNumber = (value, fieldName, setErrors) => {
  const condition = (val) => val <= 0;
  const errorMessage = {
    field: fieldName,
    message: `${
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
    } should be a positive number!`,
  };

  genericValidator(value, condition, errorMessage, setErrors);
};
