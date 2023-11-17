import * as request from "../lib/request";
const baseUrl = "http://localhost:3030/jsonstore/furniture";

export const getAll = async () => {
  const result = await request.get(baseUrl);
  console.log(`${baseUrl}/7e5cdf1c-878d-4184-a0e0-893b0002ccda`);

  return Object.values(result);
};

export const getOne = async (productId) => {
  const result = await request.get(`${baseUrl}/${productId}`);
  return result;
};

export const create = async (data) => {
  const body = {
    name: data.name,
    category: data.category,
    price: data.price,
    priceBefore: data.priceBefore,
    imageUrl: data.imageUrl,
    measurements: {
      width: data.width,
      depth: data.depth,
      height: data.height,
    },
    description: data.description,
    articleNumber: data.articleNumber,
  };

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  return result;
};

export const remove = async (productId) => {
  const response = await fetch(`${baseUrl}/${productId}`, { method: "DELETE" });
  const result = await response.json();

  return result;
};