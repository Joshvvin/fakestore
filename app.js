
fetch('https://fakestoreapi.com/products/categories')
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        const content_container = document.querySelector('.content-container');
        const ul = document.querySelector('.category-container');       
        for(const category of data){
            const a = document.createElement('a');
            a.setAttribute('class', 'category');
            // a.style.border = '1px solid black';
            a.setAttribute('id', `${category}`);
            a.style.width = '23%';
            a.style.display = 'flex';
            a.style.justifyContent = 'center';
            a.style.alignItems = 'center';
            // a.style.border = '1px solid black';
            a.href = '#';
            a.textContent = `${category}`;
            a.style.textTransform = 'Uppercase';
            a.style.textAlign = 'center';
            a.style.color = 'black';
            a.style.height = '100%';
            ul.append(a);
        }
    })
fetch('https://fakestoreapi.com/products/')
    .then((res)=>{
        return res.json();
    })
    .then((products)=>{
        // console.log(data);
        const content_container = document.querySelector('.content-container');
        // const ul = document.querySelector('.category-container');       
        // ul.style.display =
        content_container.style.display = 'flex';
        // content_container.justifyContent = 'center';
        // content_container.alignItems = 'center';
        const product_list = document.createElement('ul');
        product_list.style.display = 'flex';
        product_list.style.width = '100%';
        product_list.style.height = '95%';
        product_list.style.marginTop = '3%';
        product_list.setAttribute('class','product-list');
        // product_list.style.border = '1px solid black';
        product_list.style.flexWrap = 'wrap';
        product_list.style.justifyContent = 'space-evenly';

        product_list.style.alignItems = 'space-evenly';
        // product_list.style.columnGap = '20px';
        // product_list.style.rowGap = '20px';

        // product_list.style.justifyContent = 'space-between';
        for(const product of products){        
            const product_li = document.createElement('li');
            product_li.setAttribute('class', `${product.category}-li`);
            product_li.setAttribute('id', `${product.id}`);
            // product_li.textContent = `${product.title}`;
            product_li.style.width = '23%';
            product_li.style.height = '18%';
            // product_li.style.border = '1px solid black';
            product
            product_li.style.backgroundColor = 'white';
            product_li.style.borderRadius = '15px';
            product_li.style.listStyleType = 'none';  
            product_li.style.display = 'flex';
            // product_li.style.minHeight = '200px';
            product_li.style.alignItems = 'center';
            product_li.style.justifyContent = 'center';
            const product_li_items = document.createElement('div');
            product_li_items.style.height = '90%';
            product_li_items.style.width = '90%';
            product_li_items.style.display = 'flex';
            // product_li_items.style.border = '1px solid black';
            product_li_items.style.flexDirection = 'column'; 
            product_li_items.style.justifyContent = 'space-between';
            // product_li_items.style.rowGap = '20px';     
            const image_li = document.createElement('div');
            image_li.style.height = '55%';
            image_li.style.width = '100%';
            image_li.style.listStyleType = 'none';  
            // image_li.style.border = '1px solid black';
            image_li.style.overflow = 'hidden';
            const image = document.createElement('img');
            image.src =`${product.image}`;
            image.style.width = '100%';
            image.style.height = '100%';
            image.style.objectFit = 'contain';
            const title = document.createElement('div');
            title.style.width = '100%';
            title.style.height = '15%';
            title.textContent = `${product.title}`;
            title.style.fontSize = '18px';
            // title.style.border = '1px solid black';
            title.style.textAlign = 'center';
            const pr_container = document.createElement('div');
            pr_container.style.width = '100%';
            // desc.textContent = `${product.description}`;
            // desc.style.fontSize = '10px';
            // pr_container.style.border = '1px solid black';
            pr_container.style.display = 'flex';
            pr_container.style.justifyContent = 'space-between';
            pr_container.style.height = '6%';
            pr_container.style.width = '100%';
            // pr_container.style.border = '1px solid black';
            const price = document.createElement('div');
            price.textContent = `$ ${product.price}`;
            price.style.width = '100%';
            price.style.height = '100%';
            price.style.fontSize = '25px';
            price.style.textAlign = 'center';
            // const rating = document.createElement('div');
            // rating.textContent = `${product.rating}`;
            // rating.style.width = '30%';
            // rating.style.height = '100%';
            image_li.append(image);
            product_li_items.append(image_li);
            pr_container.append(price);
            // pr_container.append(rating);
            product_li_items.append(pr_container);
            product_li_items.append(title);
            // product_li_items.append(desc);

            product_li.append(product_li_items);
            product_list.append(product_li);
        }         
        content_container.append(product_list);
    })
const categories_ul = document.querySelector('.category-container');
// console.log(categories_ul);
function displayproducts(e){
    // console.log(e.target);
    // console.log(e.target.id);
    const product_list = document.querySelector('.product-list');
    const content = document.querySelector('content');
    content.style.height = '150vh';
    // console.log(content_list);
    for(const product of product_list.children){
        // console.log(product.getAttribute('class'));
        // console.log(e.target);
        // console.log(product);
        product.style.display = 'flex';
        const pr_class = product.getAttribute('class');
        // console.log(pr_class);
        // console.log(e.target.id);
        // console.log()
        // console.log(e.target.id);
        // console.log(pr_class.slice(0,e.target.id.length));
        if(pr_class.slice(0,e.target.id.length) != e.target.id){
            product.style.display = 'none';
        }
        else{
            const product_list = document.querySelector('.product-list');
            product_list.style.justifyContent = 'start';
            product_list.style.alignItems = 'space-evenly';
            // product.style.width = '20%';
            product_list.style.columnGap = '20px';
            product.style.height = '40%';
        }
        // console.log(`.${pr_class}`);
    }
}
categories_ul.addEventListener('click', displayproducts);

const home = document.querySelector('.start');
function gohome(e){
    const content = document.querySelector('content');
    content.style.height = '300vh';
    const product_list = document.querySelector('.product-list');
    product_list.style.justifyContent = 'space-evenly';
    product_list.style.alignItems = 'space-evenly';
    for(const product of product_list.children){
        product.style.display = 'flex';
        product.style.height = '18%';
    }
}
home.addEventListener('click', gohome);