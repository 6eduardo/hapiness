// Dados das lojas parceiras
const partners = [
    { id: 1, name: "Shoprite", category: "Supermercado", image: "./src/assets/images/restaurantes/shoprite.jpg" },
    { id: 2, name: "Kero", category: "Restaurante", image: "./src/assets/images/restaurantes/kero.jpg" },
    { id: 3, name: "MAX", category: "Restaurante", image: "./src/assets/images/restaurantes/maxi.jpg" },
    { id: 4, name: "Mupei's Kitchen", category: "Restaurante", image: "./src/assets/images/restaurantes/mufe_kitchen.jpg" },
    { id: 5, name: "Ponto B", category: "Restaurante", image: "./src/assets/images/restaurantes/porto.jpg" },
    { id: 6, name: "Batuk", category: "Restaurante", image: "./src/assets/images/restaurantes/batuk.jpg" },
    { id: 7, name: "Alfa Beach Bar", category: "Restaurante", image: "./src/assets/images/restaurantes/alfa.jpg" },
    { id: 8, name: "Sobegas", category: "Restaurante", image: "./src/assets/images/restaurantes/sobegas.jpg" },
    { id: 9, name: "Espaço Gourmet", category: "Restaurante", image: "./src/assets/images/restaurantes/espaco_gourmet.jpg" },
    { id: 10, name: "Alkamal", category: "Restaurante", image: "./src/assets/images/restaurantes/alkamal.jpg" }
];

// Dados dos produtos (por loja)
const productsByStore = {
    1: [
        { id: 101, name: "Arroz 5kg", price: 25.90, description: "Arroz branco tipo 1" },
        { id: 102, name: "Feijão 1kg", price: 8.50, description: "Feijão carioca" },
        { id: 103, name: "Óleo 900ml", price: 7.90, description: "Óleo de soja" },
        { id: 104, name: "Açúcar 5kg", price: 15.90, description: "Açúcar refinado" },
        { id: 105, name: "Sal 1kg", price: 3.50, description: "Sal refinado" }
    ],
    2: [
        { id: 201, name: "Prato Executivo", price: 45.00, description: "Arroz, feijão, salada, carne e farofa" },
        { id: 202, name: "Moqueca de Peixe", price: 65.00, description: "Acompanha arroz e pirão" },
        { id: 203, name: "Frango Grelhado", price: 40.00, description: "Acompanha arroz e legumes" },
        { id: 204, name: "Suco Natural", price: 12.00, description: "Sabores: laranja, maracujá ou abacaxi" }
    ],
    3: [
        { id: 301, name: "Hambúrguer Clássico", price: 28.00, description: "Pão, carne, queijo e salada" },
        { id: 302, name: "Hambúrguer Bacon", price: 35.00, description: "Pão, carne, queijo, bacon e salada" },
        { id: 303, name: "Batata Frita", price: 15.00, description: "Porção média" },
        { id: 304, name: "Refrigerante", price: 8.00, description: "Lata 350ml" }
    ],
};

// Estado da aplicação
let currentUser = null;
let cart = [];
let currentStore = null;

// Elementos do DOM
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const storeModal = document.getElementById('store-modal');
const cartModal = document.getElementById('cart-modal');
const confirmationModal = document.getElementById('confirmation-modal');
const partnerGrid = document.getElementById('partner-grid');
const productsGrid = document.getElementById('products-grid');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const storeModalTitle = document.getElementById('store-modal-title');
const confirmationTitle = document.getElementById('confirmation-title');
const confirmationMessage = document.getElementById('confirmation-message');

// Event Listeners
document.getElementById('login-link').addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'flex';
});

document.getElementById('register-link').addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.style.display = 'flex';
});

document.getElementById('order-now-btn').addEventListener('click', (e) => {
    e.preventDefault();
    if (currentUser) {
        storeModal.style.display = 'flex';
    } else {
        loginModal.style.display = 'flex';
    }
});

document.getElementById('partners-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('partners-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('home-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('confirm-order-btn').addEventListener('click', () => {
    cartModal.style.display = 'none';
    
    // Simular confirmação ou rejeição aleatória
    const isConfirmed = Math.random() > 0.2; 
    
    if (isConfirmed) {
        confirmationTitle.textContent = "Pedido Confirmado!";
        confirmationMessage.textContent = "Seu pedido foi recebido e está sendo processado. Aguarde a entrega no conforto da sua casa.";
    } else {
        confirmationTitle.textContent = "Pedido Rejeitado";
        confirmationMessage.textContent = "Infelizmente não conseguimos processar seu pedido no momento. Por favor, tente novamente mais tarde.";
    }
    
    confirmationModal.style.display = 'flex';
    cart = []; 
    updateCart();
});

// Fechar modais ao clicar no X
document.querySelectorAll('.close-modal').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
        storeModal.style.display = 'none';
        cartModal.style.display = 'none';
        confirmationModal.style.display = 'none';
    });
});

// Fechar modais ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === registerModal) registerModal.style.display = 'none';
    if (e.target === storeModal) storeModal.style.display = 'none';
    if (e.target === cartModal) cartModal.style.display = 'none';
    if (e.target === confirmationModal) confirmationModal.style.display = 'none';
});

// Formulário de login
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simular login (em uma aplicação real, isso seria uma chamada ao backend)
    currentUser = {
        email,
        name: email.split('@')[0] // Simular nome a partir do email
    };
    
    loginModal.style.display = 'none';
    alert(`Bem-vindo de volta, ${currentUser.name}!`);
});

// Formulário de cadastro
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const phone = document.getElementById('register-phone').value;
    const address = document.getElementById('register-address').value;
    
    // Simular cadastro, pode ser substituido por uma chamada real ao backend
    currentUser = {
        name,
        email,
        phone,
        address
    };
    
    registerModal.style.display = 'none';
    alert(`Cadastro realizado com sucesso, ${name}! Agora você pode fazer seus pedidos.`);
});

// Função para carregar parceiros
function loadPartners() {
    partnerGrid.innerHTML = '';
    partners.forEach(partner => {
        const partnerCard = document.createElement('div');
        partnerCard.className = 'partner-card';
        partnerCard.innerHTML = `
            <div class="partner-img" style="background-image: url('${partner.image}')"></div>
            <div class="partner-info">
                <h3>${partner.name}</h3>
                <p>${partner.category}</p>
            </div>
        `;
        partnerCard.addEventListener('click', () => openStore(partner.id));
        partnerGrid.appendChild(partnerCard);
    });
}

// Função para abrir loja
function openStore(storeId) {
    if (!currentUser) {
        loginModal.style.display = 'flex';
        return;
    }
    
    currentStore = partners.find(p => p.id === storeId);
    storeModalTitle.textContent = currentStore.name;
    
    productsGrid.innerHTML = '';
    const products = productsByStore[storeId] || [];
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <div class="product-price">R$ ${product.price.toFixed(2)}</div>
            <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Adicionar ao Carrinho</button>
        `;
        productsGrid.appendChild(productCard);
    });
    
    storeModal.style.display = 'flex';
    
    // Adicionar eventos aos botões de adicionar ao carrinho
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            const name = e.target.getAttribute('data-name');
            const price = parseFloat(e.target.getAttribute('data-price'));
            
            addToCart(id, name, price);
        });
    });
}

// Função para adicionar item ao carrinho
function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id,
            name,
            price,
            quantity: 1
        });
    }
    
    updateCart();
    alert(`${name} adicionado ao carrinho!`);
}

// Função para atualizar o carrinho
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>${item.quantity} x R$ ${item.price.toFixed(2)}</p>
            </div>
            <div>
                R$ ${itemTotal.toFixed(2)}
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para abrir o carrinho
function openCart() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    cartModal.style.display = 'flex';
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadPartners();
    
    // Adicionar botão de carrinho 
    const cartBtn = document.createElement('div');
    cartBtn.innerHTML = '<a href="#" class="btn" style="position: fixed; bottom: 20px; right: 20px; z-index: 99;">Carrinho</a>';
    document.body.appendChild(cartBtn);
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });
});
