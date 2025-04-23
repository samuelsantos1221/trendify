import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Loja Dropshipping. Todos os direitos reservados.</p>
        <p>Endereço: Rua Exemplo, 123 - Cidade, Estado, CEP</p>
        <p>Email: contato@lojadroppshipping.com</p>
      </div>
    </footer>
  );
};

export default Footer;