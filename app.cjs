
// fetch('https://fakestoreapi.com/products/')
//     .then((res)=>{
//         console.log(res.ok);
//         if(!res.ok){
//             throw new Error('fetch has failed to load data');
//         }
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.error(error);
//     })

document.addEventListener('DOMContentLoaded', function loaded(e){
    // console.log('domcontent loaded');
    fetch('https://fakestoreapi.com/products/categories')
        .then((res)=>{
            // console.log(res.ok);
            if(!res.ok){
                throw new Error('fetch has failed to load data');
            }
            return res.json();
        })
        .then((data)=>{
        // const content = document.querySelector('.content-container');
        //     content.style.display = 'flex';
        //     const loader = document.querySelector('.loader');
        //     loader.style.display = 'none';
        const content_container = document.querySelector('.content-container');
        const ul = document.querySelector('.category-container');       
        for(const category of data){
            const a = document.createElement('a');
            a.setAttribute('class', 'category');
            a.setAttribute('id', `${category.split(' ').join('')}`);
            a.textContent = `${category}`;
            ul.append(a);
        }
        })
        .catch((e)=>{
            if(e instanceof TypeError){
                console.error('you are offline');
            }
            else{
                console.error(e);
            }
        });  
    fetch('https://fakestoreapi.com/products/')
        .then((res)=>{
            if(!res.ok){
                throw new Error('fetch has failed to load data')
            }
            return res.json();
        })
        .then((products)=>{
            const content = document.querySelector('.content-container');
            content.style.display = 'flex';
            const loader = document.querySelector('.loader');
            loader.style.display = 'none';
            const content_container = document.querySelector('.content-container');
            content_container.style.display = 'flex';
            const product_list = document.createElement('ul');
            product_list.setAttribute('class','product-list');
            for(const product of products){        
                const product_li = document.createElement('li');
                product_li.setAttribute('class', `product ${product.category.split(' ').join('')}-li`);
                product_li.setAttribute('id', `${product.id}`);
                // product_li.textContent = `${product.title}`;
                product_li.setAttribute('data-price', `${product.price}`);
                product_li.setAttribute('data-title', `${product.title}`);
                product_li.setAttribute('data-description', `${product.description}`);
                product_li.setAttribute('data-rating-rate', `${product.rating.rate}`);
                product_li.setAttribute('data-rating-count', `${product.rating.count}`);
                product_li.setAttribute('data-category', `${product.category}`);
                product_li.setAttribute('data-image', `${product.image}`);
                
                
                const a = document.createElement('a');
                a.setAttribute('class', 'product_li_a');                
                a.href = '#';


                const product_li_items = document.createElement('div');
                product_li_items.setAttribute('class', 'product_li_items');
                     
                const image_li = document.createElement('div');
                image_li.setAttribute('class', 'image_li');
                
                const image = document.createElement('img');
                image.setAttribute('class', 'imageclass');
                image.src =`${product.image}`;
                
                const title = document.createElement('div');
                title.setAttribute('class', 'product_title');               
                title.textContent = `${product.title}`;

                const pr_container = document.createElement('div');
                pr_container.setAttribute('class', 'pr_container');

                const dollar = document.createElement('div');
                dollar.setAttribute('class', 'product_dollar');
                dollar.textContent = '$';
                
                // dollar.style.border = '1px solid black';
                const price = document.createElement('div');
                price.setAttribute('class', 'product_price');
                price.textContent = `${product.price}`;
                
                image_li.append(image);
                product_li_items.append(image_li);
                pr_container.append(dollar);
                pr_container.append(price);

                // pr_container.append(rating);
                product_li_items.append(pr_container);
                product_li_items.append(title);
                // product_li_items.append(desc);

                a.append(product_li_items);
                product_li.append(a);
                product_list.append(product_li);
            }  

            content_container.append(product_list);
        })
        .catch(console.error);
    const categories_ul = document.querySelector('.category-container');
    // console.log(categories_ul);
    function displayproducts(e){
        const product_list = document.querySelector('.product-list');
        product_list.style.display = 'flex';
        const content = document.querySelector('.content');
        content.style.height = '150vh';
        const content_container = document.querySelector('.content-container');
        if(content_container.children.length == 2){
            const rmelement = content_container.lastElementChild;
            // console.log(rmelement);
            if(rmelement.getAttribute('class') == 'product_container'){
                rmelement.remove();
            }
        }
        for(const product of product_list.children){
            product.style.display = 'flex';
            const pr_class = product.classList[1];
            // console.log(pr_class, e.target.id);
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
        const content_container = document.querySelector('.content-container');
        const content = document.querySelector('.content');
        content.style.height = '300vh';
        const product_list = document.querySelector('.product-list');
        if(content_container.children.length == 2){
            const rmelement = content_container.lastElementChild;
            // console.log(rmelement);
            if(rmelement.getAttribute('class') == 'product_container'){
                rmelement.remove();
            }
        }
    }
    home.addEventListener('click', gohome);

    const cc = document.querySelector('.content-container');
    // console.log(plist);
    function display_product(e){
        const element = e.target.parentElement.parentElement.parentElement.parentElement;
        const title = element.getAttribute('data-title');
        const price = element.getAttribute('data-price');
        const description = element.getAttribute('data-description');
        const rating_rate = element.getAttribute('data-rating-rate');
        const rating_count = element.getAttribute('data-rating-count');
        const category = element.getAttribute('data-category');
        const imagesrc = element.getAttribute('data-image');
        const content = document.querySelector('.content');
        content.style.height = '100vh';
        let plist = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        
        plist.style.display = 'none';
        // cc.style.display = flex;
        cc.style.justifyContent = 'center';
        cc.style.alignItems = 'center';
        // cc.style.border = '1px solid black';
        const product_container = document.createElement('div');
        product_container.setAttribute('class', 'product_container'); 

        const i_container = document.createElement('div');
        i_container.setAttribute('class', 'i_container');
        
        const img_container = document.createElement('div');
        img_container.setAttribute('class', 'img_container');
        

        const img = document.createElement('img');
        img.src = imagesrc;
        img.setAttribute('class', 'disp_img');
        
        img_container.append(img);
        // console.log(e.target.parentElement.parentElement.parentElement.parentElement);

        const rating_container = document.createElement('div');
        rating_container.setAttribute('class', 'rating_container');

        const rate_container = document.createElement('div');
        rate_container.setAttribute('class', 'rate_container');
        rate_container.textContent = rating_rate +'*'; 
        rating_container.append(rate_container);

        const count_container = document.createElement('div');
        count_container.setAttribute('class', 'count_container');
        count_container.textContent = rating_count + ' ratings';     


        rating_container.append(count_container);

        i_container.append(img_container);
        i_container.append(rating_container);

        product_container.append(i_container);

        const details_container = document.createElement('div');
        details_container.setAttribute('class', 'details_container');

        const pr_container = document.createElement('div');
        pr_container.setAttribute('class', 'price_rating_container');

        const dollar = document.createElement('div');
        dollar.setAttribute('class', 'disp_dollar');
        dollar.textContent = '$';
       
        const price_container = document.createElement('div');
        price_container.setAttribute('class', 'price_container');
        price_container.textContent = price;
       
        pr_container.append(dollar);
        pr_container.append(price_container);


        details_container.append(pr_container);

        const details = document.createElement('div');
        details.setAttribute('class', 'details');

        details.style.width = '95%';
        details.style.height = '80%';
        details.style.display = 'flex';
        // details.style.border = '1px solid black';
        details.style.flexDirection = 'column';
        details.style.justifyContent = 'space-evenly';

        const title_container = document.createElement('div');
        title_container.style.width = '100%';
        title_container.style.height = '20%';
        // title_container.style.display = 'flex';
        // title_container.style.border = '1px solid black';
        // title_container.style.flexDirection = 'column';
        // title_container.style.marginLeft = '-20px';
        title_container.style.fontSize = '25px';
        
        title_container.textContent = title;
        title_container.style.textAlign = 'center';

        details.append(title_container);

        const description_container = document.createElement('div');
        description_container.style.width = '100%';
        description_container.style.height = '60%';
        description_container.style.display = 'flex';
        // description_container.style.border = '1px solid black';
        // title_container.style.flexDirection = 'column';
        description_container.style.fontSize = '22px';
        description_container.textContent = description;

        details.append(description_container);

        details_container.append(details);

        product_container.append(details_container);

        cc.append(product_container);


        // console.log(plist);
    }
    cc.addEventListener('click', display_product);

    function search_item(e){
        // console.log(e.key);
        const product_list = document.querySelector('.product-list');
        // console.log(product_list);

        let c = 0;
        for(const product of product_list.children){
            if(product.style.display != 'none'){
                // console.log(product);
                // console.log(product.getAttribute('data-title').toLowerCase().includes(e.target.value));
                if(product.getAttribute('data-title').toLowerCase().includes(e.target.value)){
                    product.style.display = 'flex';
                }
                else{
                    product.style.display  = 'none';
                }
            }
        }
    }
    const search_item_to_display = document.querySelector('.search_item');
    search_item_to_display.addEventListener('keyup', search_item);
})
.catch(console.error);
const content_container = document.querySelector('.content-container');
// console.log(content_container);
content_container.style.display = 'none';
const loader = document.querySelector('.loader');
// console.log(loader);
loader.style.display = 'block';