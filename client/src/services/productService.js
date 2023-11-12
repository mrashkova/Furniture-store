const baseUrl = "http://localhost:3030/jsonstore/furniture";

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${baseUrl}/`);
    const result = await response.json();

    const data = Object.values(result.sofas)
      .concat(Object.values(result.tables))
      .concat(Object.values(result.chairs));
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllSofas = async () => {
  const response = await fetch(`${baseUrl}/sofas`);
  const result = await response.json();
  const data = Object.values(result);

  return data;
};

export const getAllTables = async () => {
  const response = await fetch(`${baseUrl}/tables`);
  const result = await response.json();
  const data = Object.values(result);

  return data;
};

export const getAllChairs = async () => {
  const response = await fetch(`${baseUrl}/chairs`);
  const result = await response.json();
  const data = Object.values(result);

  return data;
};

export const getOne = async (productId) => {
  const response = await fetch(`${baseUrl}/${productId}`);
  const result = await response.json();

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
