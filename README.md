# Furniture Store

This repository contains the source code for a simple furniture store application built with React and React Router. The application allows users to browse a catalog of furniture products, view product details, add new products, edit existing products, and purchase products.

## Features

- Catalog: Browse a catalog of furniture products.
- Product Details: Detailed information about a specific product.
- Create Product: Add a new product to the catalog.
- Edit Product: Modify existing product details.
- Buy Product: Purchase a product
- Delete Product: Remove a product from the catalog.
- About Us: Learn more about the store.
- Authentication: User login and logout functionalities.
- Registration: Allow users to register for an account.

## Installation

1. Clone the repository:

```bash
  git clone https://github.com/mrashkova/Furniture-store.git

```

2. Change into the project directory:

```bash
cd Furniture-store
```

3. Open a terminal and navigate to the server folder:

```bash
cd server
npm install
node server.js

```

4. Open a terminal and navigate to the client folder:

```bash
cd client
npm install
npm run dev
```

5. Open your browser and navigate to http://localhost:5173/.

6. To kill/stop the server/client

```bash
Ctrl + C
```

## Built with

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/en/main)
- [React Bootstrap](https://react-bootstrap.netlify.app/)

## Application Requirements

1. Node.js
2. Other packages listed in package.json

## Folder Structure

```bash
furniture-store/
│ ├── client/
│ └────── src/
| └────────── components/
| └─────────────── aboutUs/
| └─────────────────── AboutUs.jsx
| └─────────────────── AboutUs.module.css
| └─────────────── catalogue/
| └─────────────────── productItem/
| └─────────────────────── ProductDetails.jsx
| └─────────────────────── ProductDetails.module.css
| └─────────────────────── ProductItem.jsx
| └─────────────────────── ProductItem.module.css
| └─────────────────── Catalogue.jsx
| └─────────────────── Catalogue.module.css
| └─────────────── create/
| └─────────────────── Create.jsx
| └─────────────────── Create.module.css
| └─────────────── edit/
| └─────────────────── Edit.jsx
| └─────────────────── Edit.module.css
| └─────────────── footer/
| └─────────────────── Footer.jsx
| └─────────────────── Footer.module.css
| └─────────────── guards/
| └─────────────────── AuthGuard.jsx
| └─────────────────── AuthGuardLoggedIn.jsx
| └─────────────── header/
| └─────────────────── Header.jsx
| └─────────────────── Header.module.css
| └─────────────── home/
| └─────────────────── Carousel/
| └─────────────────────── HomeCarousel.jsx
| └─────────────────────── HomeCarousel.module.css
| └─────────────────── Home.jsx
| └─────────────────── Home.module.css
| └─────────────── login/
| └─────────────────── Login.jsx
| └─────────────────── Login.module.css
| └─────────────── logout/
| └─────────────────── Logout.jsx
| └─────────────── myPuchases/
| └─────────────────── Mypurchases.jsx
| └─────────────────── Mypurchases.module.css
| └─────────────── notFound/
| └─────────────────── NotFound.jsx
| └─────────────────── NotFound.module.css
| └─────────────── register/
| └─────────────────── Register.jsx
| └─────────────────── Register.module.css
| └────────── constants/
| └─────────────── paths.js
| └────────── contexts/
| └─────────────── authContext.jsx
| └────────── hooks/
| └─────────────── useForm.js
| └─────────────── usePersistedState.js
| └────────── lib/
| └─────────────── request.js
| └────────── services/
| └─────────────── authServices.js
| └─────────────── furnitureService.js
| └────────── utils/
| └─────────────── pathUtils.js
| └────────── App.jsx
| └────────── main.jsx
| └────── .eslintrc.cjs
| └────── .gitignore
| └────── .eslintrc.cjs
| └────── index.html
| └────── package-lock.json
| └────── package.json
| └────── vite.config.js
├── server/
├── package-lock.json
└── README.md
```

## Contact

Mariya Rashkova - mrashkkova@gmail.com

Project Link: [https://github.com/mrashkova/Simple-Todo-List](https://github.com/mrashkova/Simple-Todo-List)
