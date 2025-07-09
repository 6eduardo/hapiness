// Dados das lojas parceiras
const partners = [
    { id: 1, name: "Shoprite", category: "Supermercado", image: "./src/assets/images/restaurantes/shoprite.jpg" },
    { id: 2, name: "Kero", category: "Supermercado", image: "./src/assets/images/restaurantes/kero.jpg" },
    { id: 3, name: "MAX", category: "Supermercado", image: "./src/assets/images/restaurantes/maxi.jpg" },
    { id: 4, name: "Mupei's Kitchen", category: "Restaurante", image: "./src/assets/images/restaurantes/mufe_kitchen.jpg" },
    { id: 5, name: "Ponto B", category: "Restaurante", image: "./src/assets/images/restaurantes/porto.jpg" },
    { id: 6, name: "Batuk", category: "Restaurante", image: "./src/assets/images/restaurantes/batuk.jpg" },
    { id: 7, name: "Alfa Beach Bar", category: "Restaurante", image: "./src/assets/images/restaurantes/alfa.jpg" },
    { id: 8, name: "Sobegas", category: "Restaurante", image: "./src/assets/images/restaurantes/sobegas.jpg" },
    { id: 9, name: "Espaço Gourmet", category: "Restaurante", image: "./src/assets/images/restaurantes/espaco_gourmet.jpg" },
    { id: 10, name: "Alkamal", category: "Restaurante", image: "./src/assets/images/restaurantes/alkamal.jpg" }
];

// Produtos por loja 
const productsByStore = {
    // Supermercados
    1: [
        { id: 101, name: "Arroz 5kg", price: 1900.00, description: "Arroz branco tipo 1", img: "arroz.jpeg"},
        { id: 102, name: "Feijão 1kg", price: 950.00, description: "Feijão carioca", img: "feijao.jpeg"},
        { id: 103, name: "Óleo 900ml", price: 800.00, description: "Óleo de soja", img: "oleao.jpeg" },
        { id: 104, name: "Açúcar 5kg", price: 2100.00, description: "Açúcar refinado", img: "acucar.jpg" },
        { id: 105, name: "Sal 1kg", price: 450.00, description: "Sal refinado", img: "sal.webp" },
        { id: 106, name: "Farinha de Trigo 1kg", price: 850.00, description: "Farinha de trigo", img: "farinha.jpeg" },
        { id: 107, name: "Leite em Pó 400g", price: 2700.00, description: "Leite integral", img: "leitePo.jpeg" },
        { id: 108, name: "Macarrão 500g", price: 950.00, description: "Macarrão espaguete", img: "macarrao.jpeg" },
        { id: 109, name: "Café Solúvel 200g", price: 3500.00, description: "Café instantâneo", img: "cafe.jpeg" },
        { id: 110, name: "Margarina 500g", price: 1500.00, description: "Margarina vegetal", img: "margarina.jpeg" }
    ],
    2: [
        { id: 201, name: "Arroz Integral 1kg", price: 2100.00, description: "Arroz integral", img: "p1.jpeg" },
        { id: 202, name: "Feijão Preto 1kg", price: 1000.00, description: "Feijão preto", img: "p2.jpeg" },
        { id: 203, name: "Azeite 500ml", price: 2500.00, description: "Azeite de oliva", img: "p3.jpeg" },
        { id: 204, name: "Açúcar Mascavo 1kg", price: 1800.00, description: "Açúcar mascavo", img: "p4.jpeg" },
        { id: 205, name: "Sal Rosa 500g", price: 900.00, description: "Sal do Himalaia", img: "p5.jpeg" },
        { id: 206, name: "Farinha de Milho 1kg", price: 1000.00, description: "Farinha de milho", img: "p6.jpeg" },
        { id: 207, name: "Leite Condensado 395g", price: 2500.00, description: "Leite condensado", img: "p7.jpeg" },
        { id: 208, name: "Massa de Tomate 340g", price: 700.00, description: "Massa de tomate", img: "p8.jpeg" },
        { id: 209, name: "Café Moído 500g", price: 4000.00, description: "Café moído", img: "p9.jpeg" },
        { id: 210, name: "Manteiga 200g", price: 1700.00, description: "Manteiga", img: "p10.jpeg" }
    ],
    3: [
        { id: 301, name: "Arroz Parboilizado 5kg", price: 2000.00, description: "Arroz parboilizado", img: "p11.jpeg" },
        { id: 302, name: "Feijão Branco 1kg", price: 900.00, description: "Feijão branco", img: "p12.jpeg" },
        { id: 303, name: "Óleo de Milho 900ml", price: 950.00, description: "Óleo de milho", img: "p13.jpeg" },
        { id: 304, name: "Açúcar de Coco 1kg", price: 2500.00, description: "Açúcar de coco", img: "p14.jpeg" },
        { id: 305, name: "Sal Marinho 1kg", price: 800.00, description: "Sal marinho", img: "p15.jpeg" },
        { id: 306, name: "Farinha Integral 1kg", price: 950.00, description: "Farinha integral", img: "p16.jpeg" },
        { id: 307, name: "Iogurte Natural 500g", price: 2300.00, description: "Iogurte natural", img: "p17.jpeg" },
        { id: 308, name: "Molho de Tomate 340g", price: 750.00, description: "Molho de tomate", img: "p18.jpeg" },
        { id: 309, name: "Café em Cápsulas 10un", price: 4500.00, description: "Café em cápsulas", img: "p19.jpeg" },
        { id: 310, name: "Creme de Leite 200g", price: 1200.00, description: "Creme de leite", img: "p20.jpeg" }
    ],

    // Restaurantes com cardápios diferenciados
    4: [
        { id: 401, name: "Prato Executivo", price: 3800.00, description: "Arroz, feijão, carne e salada", img: "p21.jpeg" },
        { id: 402, name: "Moqueca de Peixe", price: 5200.00, description: "Acompanha arroz e pirão", img: "p22.jpeg" },
        { id: 403, name: "Frango Grelhado", price: 3200.00, description: "Com arroz e legumes", img: "p23.jpeg" },
        { id: 404, name: "Suco Natural", price: 950.00, description: "Vários sabores", img: "p24.jpeg" },
        { id: 405, name: "Picanha Grelhada", price: 6400.00, description: "Com arroz e batata", img: "p25.jpeg" },
        { id: 406, name: "Tilápia Frita", price: 4500.00, description: "Com salada e funje", img: "p26.jpeg" },
        { id: 407, name: "Espetada de Frango", price: 3000.00, description: "Frango no espeto", img: "p27.jpeg" },
        { id: 408, name: "Camarão Grelhado", price: 8000.00, description: "Com arroz", img: "p28.jpeg" },
        { id: 409, name: "Refrigerante", price: 700.00, description: "Lata 350ml", img: "p29.jpeg" },
        { id: 410, name: "Batata Frita", price: 1300.00, description: "Porção média", img: "p30.jpeg" }
    ],
    5: [
        { id: 501, name: "Feijoada Completa", price: 4000.00, description: "Feijoada com acompanhamentos", img: "p31.jpeg" },
        { id: 502, name: "Bife Acebolado", price: 3500.00, description: "Bife com cebola e arroz", img: "p32.jpeg" },
        { id: 503, name: "Salada Tropical", price: 2500.00, description: "Salada de frutas e legumes", img: "p33.jpeg" },
        { id: 504, name: "Suco Detox", price: 1200.00, description: "Suco verde natural", img: "p34.jpeg" },
        { id: 505, name: "Espetada de Camarão", price: 8500.00, description: "Espetada de camarão com legumes", img: "p35.jpeg" },
        { id: 506, name: "Pizza de Calabresa", price: 5500.00, description: "Pizza de calabresa", img: "p36.jpeg" },
        { id: 507, name: "Lasanha Bolonhesa", price: 6000.00, description: "Lasanha de carne", img: "p37.jpeg" },
        { id: 508, name: "Costela Assada", price: 7500.00, description: "Costela de porco assada", img: "p38.jpeg" },
        { id: 509, name: "Refrigerante", price: 800.00, description: "Lata 350ml", img: "p39.jpeg" },
        { id: 510, name: "Sorvete", price: 1500.00, description: "Bola de sorvete", img: "p40.jpeg" }
    ],
    6: [
            { id: 601, name: "Frango Assado", price: 3500.00, description: "Frango assado com batata", img: "p41.jpeg" },
            { id: 602, name: "Escondidinho de Carne", price: 4700.00, description: "Escondidinho de carne moída", img: "p42.jpeg" },
            { id: 603, name: "Moamba de Galinha", price: 5500.00, description: "Prato típico angolano", img: "p43.jpeg" },
            { id: 604, name: "Suco de Manga", price: 1000.00, description: "Suco natural de manga", img: "p44.jpeg" },
            { id: 605, name: "Polvo Grelhado", price: 8800.00, description: "Polvo grelhado com legumes", img: "p45.jpeg" },
            { id: 606, name: "Caldeirada de Peixe", price: 6000.00, description: "Peixe com molho e legumes", img: "p46.jpeg" },
            { id: 607, name: "Quibebe de Abóbora", price: 2400.00, description: "Purê de abóbora", img: "p47.jpeg" },
            { id: 608, name: "Pastel de Bacalhau", price: 1500.00, description: "Porção com 5 pastéis", img: "p48.jpeg" },
            { id: 609, name: "Refrigerante", price: 850.00, description: "Lata 350ml", img: "p49.jpeg" },
            { id: 610, name: "Bolo de Chocolate", price: 2000.00, description: "Fatia", img: "p50.jpeg" }
        ],
    7: [
        { id: 701, name: "Tigelinha de Frango", price: 3200.00, description: "Frango desfiado com arroz", img: "p51.jpeg" },
        { id: 702, name: "Costelinha BBQ", price: 7200.00, description: "Costela ao molho barbecue", img: "p52.jpeg" },
        { id: 703, name: "Massa à Bolonhesa", price: 4800.00, description: "Massa com molho de carne", img: "p53.jpeg" },
        { id: 704, name: "Suco de Abacaxi", price: 1100.00, description: "Suco natural de abacaxi", img: "p54.jpeg" },
        { id: 705, name: "Risoto de Camarão", price: 7900.00, description: "Risoto cremoso com camarão", img: "p55.jpeg" },
        { id: 706, name: "Bacalhau à Brás", price: 6900.00, description: "Prato português com bacalhau", img: "p56.jpeg" },
        { id: 707, name: "Salada Caesar", price: 2600.00, description: "Com molho Caesar", img: "p57.jpeg" },
        { id: 708, name: "Sopa de Legumes", price: 2200.00, description: "Sopa caseira de legumes", img: "p58.jpeg" },
        { id: 709, name: "Refrigerante", price: 800.00, description: "Lata 350ml", img: "p59.jpeg" },
        { id: 710, name: "Pudim de Leite", price: 1700.00, description: "Fatia", img: "p60.jpeg" }
    ],
    8: [
        { id: 801, name: "Moqueca de Camarão", price: 8600.00, description: "Com arroz e farofa", img: "p61.jpeg" },
        { id: 802, name: "Galinha Cabidela", price: 5200.00, description: "Prato angolano", img: "p62.jpeg" },
        { id: 803, name: "Strogonoff de Frango", price: 4900.00, description: "Com arroz e batata palha", img: "p63.jpeg" },
        { id: 804, name: "Suco de Laranja", price: 900.00, description: "Suco natural de laranja", img: "p64.jpeg" },
        { id: 805, name: "Peixe Frito", price: 6200.00, description: "Com arroz e molho", img: "p65.jpeg" },
        { id: 806, name: "Massa Carbonara", price: 5300.00, description: "Massa com molho branco", img: "p66.jpeg" },
        { id: 807, name: "Tábua de Frios", price: 6500.00, description: "Porção para duas pessoas", img: "p67" },
        { id: 808, name: "Caldo Verde", price: 2700.00, description: "Sopa portuguesa", img: "p68.jpeg" },
        { id: 809, name: "Refrigerante", price: 850.00, description: "Lata 350ml", img: "p69.jpeg" },
        { id: 810, name: "Torta de Limão", price: 1800.00, description: "Fatia", img: "p70.jpeg" }
    ],
    9: [
        { id: 901, name: "Churrasco Misto", price: 9000.00, description: "Várias carnes na brasa", img: "p71.jpeg" },
        { id: 902, name: "Frango à Parmegiana", price: 5600.00, description: "Com arroz e batata", img: "p72.jpeg" },
        { id: 903, name: "Macarrão 4 Queijos", price: 4700.00, description: "Massa com molho de queijo", img: "p73.jpeg" },
        { id: 904, name: "Suco de Maracujá", price: 950.00, description: "Suco natural de maracujá", img: "p74.jpeg" },
        { id: 905, name: "Tilápia Assada", price: 5800.00, description: "Com arroz e legumes", img: "p75.jpeg" },
        { id: 906, name: "Bife de Porco", price: 5100.00, description: "Com arroz e farofa", img: "p76.jpeg" },
        { id: 907, name: "Empada de Frango", price: 2400.00, description: "Porção com 2 unidades", img: "p77.jpeg" },
        { id: 908, name: "Creme de Abóbora", price: 2300.00, description: "Sopa cremosa", img: "p78.jpeg" },
        { id: 909, name: "Refrigerante", price: 750.00, description: "Lata 350ml", img: "p79.jpeg" },
        { id: 910, name: "Mousse de Chocolate", price: 1600.00, description: "Fatia", img: "p80.jpeg" }
    ],
    10: [
        { id: 1001, name: "Bobó de Camarão", price: 8800.00, description: "Com arroz e farofa", img: "p81.jpeg" },
        { id: 1002, name: "Galeto Grelhado", price: 5400.00, description: "Galeto com acompanhamentos", img: "p82.jpeg" },
        { id: 1003, name: "Lasanha de Frango", price: 5300.00, description: "Lasanha caseira", img: "p83.jpeg" },
        { id: 1004, name: "Suco de Uva", price: 1000.00, description: "Suco natural de uva", img: "p84.jpeg" },
        { id: 1005, name: "Peixe na Brasa", price: 6900.00, description: "Peixe com legumes", img: "p85.jpeg" },
        { id: 1006, name: "Macarrão Primavera", price: 4900.00, description: "Massa com vegetais", img: "p86.jpeg" },
        { id: 1007, name: "Escondidinho de Bacalhau", price: 7200.00, description: "Bacalhau gratinado", img: "p87.jpeg" },
        { id: 1008, name: "Canja de Galinha", price: 2500.00, description: "Sopa tradicional", img: "p88.jpeg" },
        { id: 1009, name: "Refrigerante", price: 850.00, description: "Lata 350ml", img: "p89.jpeg" },
        { id: 1010, name: "Tiramisu", price: 1900.00, description: "Sobremesa italiana", img: "p90.jpeg" }
    ]
};


// Estado da aplicação
let currentUser = null;
let cart = [];
let currentStore = null;
criarAdm();




// ========== Elementos DOM ==========
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

// ========== Funções Utilitárias ==========
/**
 * Adiciona um novo usuário no localStorage.
 * Verifica se o e-mail já foi cadastrado antes.
 */
function addUsers(user) {
    const allUsers = JSON.parse(localStorage.getItem("Users") || "[]");
    const exists = allUsers.find(u => u.email === user.email);
    if (exists) {
        alert("Este e-mail já está cadastrado.");
        return false;
    }
    allUsers.push(user);
    localStorage.setItem("Users", JSON.stringify(allUsers));
    return true;
}

/**
 * Atualiza os links do cabeçalho com base no estado de login.
 */
function updateHeaderLinks() {
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const accountLink = document.getElementById('account-link');
    const logout = document.getElementById("logoutBtn");

    if (currentUser) {
        loginLink.style.display = 'none';
        registerLink.style.display = 'none';
        accountLink.style.display = 'block';
        logout.style.display = "block";
        accountLink.textContent = `Conta (${currentUser.name})`;
    } else {
        loginLink.style.display = 'block';
        registerLink.style.display = 'block';
        accountLink.style.display = 'none';
    }
}

// ========== Funções Principais ==========
/**
 * Carrega as lojas parceiras na tela.
 */
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

/**
 * Abre a loja e exibe seus produtos.
 */
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
            <img src="/hapiness/src/assets/images/alimentos/${product.img}" alt="${product.name}" class="product-image" />
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <div class="product-price">KZS ${product.price.toFixed(2)}</div>
            <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Adicionar ao Carrinho</button>
        `;
        productsGrid.appendChild(productCard);
    });

    storeModal.style.display = 'flex';

    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            const name = e.target.getAttribute('data-name');
            const price = parseFloat(e.target.getAttribute('data-price'));
            addToCart(id, name, price);
        });
    });
}


/**
 * Adiciona um produto ao carrinho.
 */
function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
    alert(`${name} adicionado ao carrinho!`);
}

/**
 * Atualiza o carrinho na interface e no localStorage.
 */
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
                <p>${item.quantity} x KZS ${item.price.toFixed(2)}</p>
            </div>
            <div>R$ ${itemTotal.toFixed(2)}</div>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = `Total: KZS ${total.toFixed(2)}`;
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Criar Admin
function criarAdm() {
    const email = "admin@happiness.com";
    const allUsers = JSON.parse(localStorage.getItem("Users") || "[]");
    const foundUser = allUsers.find(user => user.email === email);

    if (!foundUser) {
        const adminUser = {
            name: "Adriano Gaspar",
            email: email,
            password: "admin123",
            phone: "+244 929 187 782",
            address: "Sede da Empresa"
        };
        allUsers.push(adminUser);
        localStorage.setItem("Users", JSON.stringify(allUsers));
        console.log("Administrador criado com sucesso!");
    } else {
        console.log("Administrador já existe.");
    }
}

/**
 * Abre o carrinho.
 */
function openCart() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    cartModal.style.display = 'flex';
}

// ========== Eventos ==========
document.getElementById('login-link').addEventListener('click', e => {
    e.preventDefault();
    loginModal.style.display = 'flex';
});

document.getElementById('register-link').addEventListener('click', e => {
    e.preventDefault();
    registerModal.style.display = 'flex';
});

document.getElementById('order-now-btn').addEventListener('click', e => {
    e.preventDefault();
    if (currentUser) {
        storeModal.style.display = 'flex';
    } else {
        loginModal.style.display = 'flex';
    }
});

document.getElementById('partners-link').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('partners-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('home-link').addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('confirm-order-btn').addEventListener('click', () => {
    cartModal.style.display = 'none';
    const isConfirmed = Math.random() > 0.2;

    if (isConfirmed) {
        confirmationTitle.textContent = "Pedido Confirmado!";
        confirmationMessage.textContent = "Seu pedido foi recebido e está sendo processado. Aguarde a entrega no seu conforto.";

        const order = {
            id: Date.now(),
            user: currentUser,
            items: [...cart],
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            date: new Date().toLocaleString()
        };

        const ordersHistory = JSON.parse(localStorage.getItem('ordersHistory')) || [];
        ordersHistory.push(order);
        localStorage.setItem('ordersHistory', JSON.stringify(ordersHistory));
    } else {
        confirmationTitle.textContent = "Pedido Rejeitado";
        confirmationMessage.textContent = "Não foi possível processar seu pedido. Tente mais tarde.";
    }

    confirmationModal.style.display = "flex";
    cart = [];
    updateCart();
    localStorage.removeItem('cart');
});

document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
        storeModal.style.display = 'none';
        cartModal.style.display = 'none';
        confirmationModal.style.display = 'none';
    });
});

window.addEventListener('click', e => {
    if ([loginModal, registerModal, storeModal, cartModal, confirmationModal].includes(e.target)) {
        e.target.style.display = 'none';
    }
});

// Login
document.getElementById('login-form').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const allUsers = JSON.parse(localStorage.getItem("Users") || "[]");
    const foundUser = allUsers.find(user => user.email === email && user.password === password);
    if (foundUser) {
        currentUser = { email: foundUser.email, name: foundUser.name, address: foundUser.address};
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateHeaderLinks();
        loginModal.style.display = 'none';
        alert(`Bem-vindo de volta, ${currentUser.name}!`);
    } else {
        alert("Email ou senha incorretos.");
    }
});

// Cadastro
document.getElementById('register-form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const phone = document.getElementById('register-phone').value;
    const address = document.getElementById('register-address').value;

    const user = { name, email, password, phone, address };
    if (addUsers(user)) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateHeaderLinks();
        registerModal.style.display = 'none';
        alert(`Cadastro realizado com sucesso, ${name}!`);
    }
});

// ========== Inicialização ==========
document.addEventListener('DOMContentLoaded', () => {
    loadPartners();
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
    }
    updateHeaderLinks();

    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }

    // Botão Carrinho
    const cartBtn = document.createElement('div');
    cartBtn.innerHTML = '<a href="#" class="btn" style="position: fixed; bottom: 20px; right: 20px; z-index: 99;">Carrinho</a>';
    document.body.appendChild(cartBtn);
    cartBtn.addEventListener('click', e => {
        e.preventDefault();
        openCart();
    });
}); 

//Cadastro
document.getElementById('open-register-btn').addEventListener('click', () => {
    loginModal.style.display = 'none';
    registerModal.style.display = 'flex';
});

