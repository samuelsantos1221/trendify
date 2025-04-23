import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset/:token" element={<ResetPasswordPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

# Tarefas Pendentes

## Backend
- [ ] Adicionar envio de e-mails transacionais (ex.: confirmação de pedido).
- [ ] Criar endpoints para gerenciamento de endereços.

## Frontend
- [ ] Adicionar animações de transição entre páginas.
- [ ] Criar página de gerenciamento de endereços.
- [ ] Melhorar design do formulário de checkout.

## Geral
- [ ] Testar todas as funcionalidades implementadas.
- [ ] Configurar deploy para produção.