import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Loja Dropshipping</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/categories">Categorias</Link>
            </li>
            <li>
              <Link to="/cart">Carrinho</Link>
            </li>
            <li>
              <Link to="/orders">Pedidos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;