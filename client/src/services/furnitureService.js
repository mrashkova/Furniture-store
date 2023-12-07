import * as request from "../lib/request";
const baseUrl = "http://localhost:3030/jsonstore/furniture";

export const getAll = async () => {
  const result = await request.get(baseUrl);
  console.log(`${baseUrl}/7e5cdf1c-878d-4184-a0e0-893b0002ccda`);

  return Object.values(result);
};

export const getTopThree = async () => {
  try {
    const result = await request.get(baseUrl);

    // Convert the result object into an array
    const productArray = Object.values(result);

    // Take the first three elements from the array
    const topThree = productArray.slice(0, 3);

    return topThree;
  } catch (error) {
    console.error("Error fetching top three products:", error);
    throw error; // Rethrow the error to propagate it
  }
};

export const getOne = async (productId) => {
  const result = await request.get(`${baseUrl}/${productId}`);
  return result;
};

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
    _ownerId: _ownerId, // Pass ownerId to the request body
  };

  const result = await request.post(baseUrl, body);
  return result;
};

export const edit = async (productId, productData) => {
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

export const remove = async (productId) =>
  request.remove(`${baseUrl}/${productId}`);

const genericValidator = (value, condition, errorMessage, setErrors) => {
  if (condition(value)) {
    setErrors((state) => ({
      ...state,
      [errorMessage.field]: errorMessage.message,
    }));
  } else {
    if (setErrors && setErrors[errorMessage.field]) {
      setErrors((state) => ({ ...state, [errorMessage.field]: "" }));
    }
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
