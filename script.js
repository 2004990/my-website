// 加载配置文件并渲染整个页面
fetch('config.json')
    .then(response => response.json())
    .then(data => {
        renderNav(data);
        renderHero(data);
        renderProducts(data);
        renderAbout(data);
        renderFooter(data);
    })
    .catch(error => {
        console.error('加载配置文件失败:', error);
        document.body.innerHTML = '<h2 style="text-align:center;margin-top:100px;">⚠️ 无法加载网站配置，请检查 config.json 是否存在。</h2>';
    });

// 渲染导航栏
function renderNav(data) {
    const nav = document.getElementById('navbar');
    const linksHtml = data.nav.links.map(link =>
        `<li><a href="${link.href}">${link.label}</a></li>`
    ).join('');

    nav.innerHTML = `
        <div class="nav-inner">
            <a href="#" class="nav-logo">${data.nav.logo}</a>
            <ul class="nav-links">${linksHtml}</ul>
        </div>
    `;
}

// 渲染横幅
function renderHero(data) {
    const hero = document.getElementById('hero');
    hero.innerHTML = `
        <div class="hero-section">
            <h1>${data.hero.title}</h1>
            <p>${data.hero.subtitle}</p>
            <a href="${data.hero.buttonLink}" class="hero-btn">${data.hero.buttonText}</a>
        </div>
    `;
}

// 渲染产品列表
function renderProducts(data) {
    const section = document.getElementById('products');
    const cardsHtml = data.products.items.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        </div>
    `).join('');

    section.innerHTML = `
        <h2 class="section-title">${data.products.title}</h2>
        <div class="product-grid">${cardsHtml}</div>
    `;
}

// 渲染关于我们
function renderAbout(data) {
    const section = document.getElementById('about');
    section.innerHTML = `
        <div class="about-section">
            <h2 class="section-title">${data.about.title}</h2>
            <p>${data.about.content}</p>
        </div>
    `;
}

// 渲染页脚
function renderFooter(data) {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <p>📧 ${data.footer.email}　|　📞 ${data.footer.phone}</p>
        <p>${data.footer.copyright}</p>
    `;
}