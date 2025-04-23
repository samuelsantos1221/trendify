# Dropshipping Store Frontend

This is the frontend part of the Dropshipping Store project, built using React. It provides a user interface for customers to browse products, manage their cart, and place orders.

## Project Structure

- **public/**: Contains static files.
  - **index.html**: The main HTML file for the React application.
  - **favicon.ico**: The favicon for the application.

- **src/**: Contains the source code for the React application.
  - **components/**: Reusable components for the application.
    - **Header.js**: Navigation menu and cart summary.
    - **Footer.js**: Store information.
    - **ProductCard.js**: Displays individual product details.
    - **CartItem.js**: Represents an item in the shopping cart.
  - **pages/**: Components representing different pages.
    - **HomePage.js**: Displays the banner, featured categories, and products.
    - **CategoriesPage.js**: Lists products by category.
    - **ProductPage.js**: Shows detailed information about a specific product.
    - **CartPage.js**: Displays the shopping cart contents.
    - **OrdersPage.js**: Shows the order confirmation and order history.
  - **App.js**: Main component that sets up routing and renders the application.
  - **index.js**: Entry point for the React application.
  - **styles/**: Contains global styles.
    - **index.css**: Global styles for the React application.

## Getting Started

To get started with the frontend, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the frontend directory**:
   ```
   cd dropshipping-store/frontend
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the application**:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Features

- Browse products by categories.
- View product details.
- Add products to the shopping cart.
- Manage cart items (add, remove, update quantities).
- Place orders and view order history.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.