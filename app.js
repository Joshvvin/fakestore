

function loaded(e){
    // const content = document.querySelector('.content-container');
    //         content.style.display = 'flex';
    //         const loader = document.querySelector('.loader');
    //         loader.style.display = 'none';

    fetch('https://fakestoreapi.com/products/categories')
    .then((res)=>{
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
            // a.style.border = '1px solid black';
            a.setAttribute('id', `${category.split(' ').join('')}`);
            // a.style.width = '23%';
            a.style.display = 'flex';
            a.style.justifyContent = 'center';
            a.style.alignItems = 'center';
            // a.style.border = '1px solid black';
            a.href = '#';
            a.textContent = `${category}`;
            a.style.textTransform = 'Uppercase';
            a.style.textAlign = 'center';
            // a.style.color = 'black';
            // a.style.height = '80%';
            ul.append(a);
        }
    })
    .catch(console.error);  
    fetch('https://fakestoreapi.com/products/')
        .then((res)=>{
            return res.json();
        })
        .then((products)=>{
            const content = document.querySelector('.content-container');
            content.style.display = 'flex';
            const loader = document.querySelector('.loader');
            loader.style.display = 'none';
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
                
                product_li.style.width = '23%';
                product_li.style.height = '18%';
                // product_li.style.border = '1px solid black';
                // product
                product_li.style.backgroundColor = 'white';
                product_li.style.borderRadius = '20px';
                // product_li.style.boxShadow = '5px 5px 10px 1px';
                product_li.style.listStyleType = 'none';  
                product_li.style.display = 'flex';
                // product_li.style.minHeight = '200px';
                product_li.style.alignItems = 'center';
                product_li.style.justifyContent = 'center';

                const a = document.createElement('a');
                a.style.width = '100%';
                a.style.height = '100%';
                a.style.color = 'black';
                a.style.display = 'flex';
                a.style.alignItems = 'center';
                a.style.justifyContent = 'center';
                a.href = '#';

                a.style.textDecoration = 'none';

                const product_li_items = document.createElement('div');
                product_li_items.style.height = '90%';
                product_li_items.style.width = '90%';
                product_li_items.style.display = 'flex';
                // product_li_items.style.border = '1px solid black';
                product_li_items.style.flexDirection = 'column'; 
                // product_li_items.style.justifyContent = 'space-between';
                product_li_items.style.rowGap = '30px';     
                const image_li = document.createElement('div');
                image_li.style.height = '60%';
                image_li.style.width = '100%';
                image_li.style.listStyleType = 'none';  
                // image_li.style.border = '1px solid black';
                image_li.style.display = 'flex';
                image_li.style.justifyContent = 'center';
                image_li.style.alignItems = 'center';

                image_li.style.overflow = 'hidden';
                const image = document.createElement('img');
                image.src =`${product.image}`;
                image.style.width = '85%';
                image.style.height = '85%';
                image.style.objectFit = 'contain';
                const title = document.createElement('div');
                title.style.width = '100%';
                title.style.height = '15%';
                title.textContent = `${product.title}`;
                title.style.fontSize = '20px';
                // title.style.justifySelf = 'start';
                // title.style.textDecoration = 'none';

                // title.style.border = '1px solid black';
                title.style.textAlign = 'center';
                const pr_container = document.createElement('div');
                pr_container.style.width = '100%';
                // desc.textContent = `${product.description}`;
                // desc.style.fontSize = '10px';
                // pr_container.style.border = '1px solid black';
                pr_container.style.display = 'flex';
                pr_container.style.justifyContent = 'center';
                pr_container.style.height = '6%';
                pr_container.style.width = '100%';
                pr_container.style.columnGap = '5px';

                const dollar = document.createElement('div');
                dollar.textContent = '$';
                dollar.style.width = '33%';
                dollar.style.height = '70%';
                dollar.style.fontSize = '20px';
                dollar.style.textAlign = 'end';
                dollar.style.alignSelf = 'end';
                // dollar.style.border = '1px solid black';
                const price = document.createElement('div');
                price.textContent = `${product.price}`;
                price.style.width = '50%';
                price.style.height = '100%';
                price.style.fontSize = '30px';
                // price.style.textAlign = 'center';
                // price.style.border = '1px solid black';
                // price.style.textDecoration = 'none';
                // const rating = document.createElement('div');
                // rating.textContent = `${product.rating}`;
                // rating.style.width = '30%';
                // rating.style.height = '100%';
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
        const content = document.querySelector('content');
        content.style.height = '150vh';
        // console.log(content_list);
        // if(content.children.length == 2){
            const rmelement = content.children[0].lastElementChild;
            // console.log(rmelement);
            if(rmelement.getAttribute('class') == 'product_container'){
                rmelement.remove();
            }
        // }
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
        const content = document.querySelector('content');
        content.style.height = '300vh';
        const product_list = document.querySelector('.product-list');
        // console.log(product_list);
        // console.log(e.target.parentElement.parentElement.nextSiblingElement);
        // console.log(content.children[0]);
        // console.log(content.children);
        // if(content.children.length == 2){
            const rmelement = content.children[0].lastElementChild;
            // console.log(rmelement);
            if(rmelement.getAttribute('class') == 'product_container'){
                rmelement.remove();
            }
        // }
        // content.childrend[0].firstElementChild.remove();
        product_list.style.display = 'flex';
        product_list.style.justifyContent = 'space-evenly';
        product_list.style.alignItems = 'space-evenly';
        for(const product of product_list.children){
            product.style.display = 'flex';
            product.style.height = '18%';
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
        const content = document.querySelector('content');
        content.style.height = '100vh';
        let plist = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        // for(const product of plist){
        //     product.style.display = 'none';
        // }
        // console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement);
        // if(e.target.getAttribute('class').slice(-3) == '-li'){
        //     plist = e.target;
        // }
        // else if(e.target.parentElement.getAttribute('class').slice(-3) == '-li'){
        //     plist = e.target.parentElement;
        // }
        // else if(e.target.parentElement.parentElement.getAttribute('class').slice(-3) == '-li'){
        //     plist = e.target.parentElement.parentElement;
        // }
        // else if(e.target.parentElement.parentElement.parentElement.getAttribute('class').slice(-3) == '-li'){
        //     plist = e.target.parentElement.parentElement.parentElement;
        // }
        // else if(e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('class').slice(-3) == '-li'){
        //     plist = e.target.parentElement.parentElement.parentElement.parentElement;
        // }
        // console.log(e.target, e.target.parentElement, e.target.parentElement.parentElement, e.target.parentElement.parentElement.parentElement, e.target.parentElement.parentElement.parentElement.parentElement, e.target.parentElement.parentElement.parentElement.parentElement.parentElement);
        plist.style.display = 'none';
        // cc.style.display = flex;
        cc.style.justifyContent = 'center';
        cc.style.alignItems = 'center';
        // cc.style.border = '1px solid black';
        const product_container = document.createElement('div');
        product_container.style.width = '60%';
        product_container.style.height = '95%';
        product_container.style.display = 'flex';
        product_container.style.flexDirection = 'column';
        product_container.style.backgroundColor = 'white';
        product_container.style.borderRadius = '20px';
        product_container.setAttribute('class', 'product_container'); 
        product_container.style.justifyContent = 'space-between';
        product_container.style.alignItems = 'space-between';
        // product_container.style.border = '1px solid black';
        // console.log(product_container);
        // const plist = document.querySelector('.product-list');

        const i_container = document.createElement('div');
        i_container.style.width = '100%';
        i_container.style.height = '55%';
        i_container.style.display = 'flex';
        // i_container.style.border = '1px solid black';
        // i_container.style.overflow = 'hidden';
        // img_container.style.alignSelf = 'start';

        const img_container = document.createElement('div');
        img_container.style.width = '90%';
        img_container.style.height = '100%';
        img_container.style.display = 'flex';
        // img_container.style.border = '1px solid black';
        img_container.style.overflow = 'hidden';
        img_container.style.alignSelf = 'start';
        img_container.style.marginLeft = '4%';
        // img_container.style.backgroundColor = 'white';
        img_container.style.justifyContent = 'center';
        img_container.style.alignItems = 'end';

        const img = document.createElement('img');
        img.src = imagesrc;
        img.style.width = '90%';
        img.style.height = '90%';
        img.style.objectFit = 'contain';
        // img.style.border = '1px solid black';
        img.style.marginLeft = '50px';
        img_container.append(img);
        // console.log(e.target.parentElement.parentElement.parentElement.parentElement);

        const rating_container = document.createElement('div');
        rating_container.style.width = '5%';
        rating_container.style.height = '100%';
        rating_container.style.display = 'flex';
        // rating_container.style.border = '1px solid black';
        rating_container.style.justifyContent = 'start';
        rating_container.style.flexDirection = 'column';


        const rate_container = document.createElement('div');
        rate_container.style.width = '100%';
        rate_container.style.height = '10%';
        rate_container.style.display = 'flex';
        // rate_container.style.border = '1px solid black'; 
        rate_container.textContent = rating_rate +'*';
        rate_container.style.fontSize = '30px';

        rating_container.style.marginLeft = '-80px';
        rating_container.style.marginTop = '10px';


        rating_container.append(rate_container);

        const count_container = document.createElement('div');
        count_container.style.width = '400%';
        count_container.style.height = '10%';
        count_container.style.display = 'flex';
        // count_container.style.border = '1px solid black'; 
        count_container.textContent = rating_count + ' ratings';
        count_container.style.fontSize = '30px';


        rating_container.append(count_container);

        i_container.append(img_container);
        i_container.append(rating_container);

        product_container.append(i_container);

        const details_container = document.createElement('div');
        details_container.style.width = '100%';
        details_container.style.height = '40%';
        details_container.style.display = 'flex';
        // details_container.style.border = '1px solid black';
        details_container.style.flexDirection = 'column';
        details_container.style.justifyContent = 'space-between';
        details_container.style.alignItems = 'center';
        // details_container.style.backgroundColor = 'white';


        const pr_container = document.createElement('div');
        pr_container.style.width = '20%';
        pr_container.style.height = '10%';
        pr_container.style.display = 'flex';
        // pr_container.style.border = '1px solid black';
        pr_container.style.justifyContent = 'center';
        pr_container.style.marginLeft = '-50px';
        pr_container.style.columnGap = '10px';
        const dollar = document.createElement('div');
        dollar.textContent = '$';
        dollar.style.width = '20%';
        dollar.style.height = '60%';
        dollar.style.fontSize = '20px';
        dollar.style.textAlign = 'end';
        dollar.style.alignSelf = 'end';
        // dollar.style.border = '1px solid black';
        const price_container = document.createElement('div');
        price_container.style.width = '30%';
        price_container.style.height = '100%';
        price_container.style.display = 'flex';
        // price_container.style.border = '1px solid black';
        price_container.textContent = price;
        price_container.style.fontSize = '40px';
        // price_container.style.marginLeft = '-30px';
        pr_container.append(dollar);
        pr_container.append(price_container);


        details_container.append(pr_container);

        const details = document.createElement('div');
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
        console.log(product_list);

        let c = 0;
        for(const product of product_list.children){
            // console.log(product);
            
            if(e.key != 'Backspace'){
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
            else{
                if(product.getAttribute('data-title').toLowerCase().includes(e.target.value)){
                    product.style.display = 'flex';
                }
                else{
                    product.style.display  = 'none';
                }
            }
            if(product.style.display != 'none'){
                c++;
            }
        }
        // console.log(c);
        if(c == 0){
            const no_show = document.createElement('div');
            no_show.textContent = 'No products to show.';
            no_show.setAttribute('class', 'no_show')
            no_show.style.fontSize = '30px';
            no_show.style.height = '50%';
            no_show.style.width = '50%';
            no_show.style.display = 'block';
            // no_show.style.border = '1px solid black';
            // no_show.
            product_list.append(no_show);
            // product_list. = 'No products to show';
        }
        else{
            // const no_show = document.querySelector('.no_show');
            // console.log(no_show);
            // for(const product of product_list){
            //     if(product.getAttribute('class') == 'no_show'){
            //         product_list.removeChild(product);
            //     }
            // }
        }        
        
    }
    const search_item_to_display = document.querySelector('.search_item');
    search_item_to_display.addEventListener('keyup', search_item);
}
document.addEventListener('DOMContentLoaded', loaded);
const content_container = document.querySelector('.content-container');
console.log(content_container);
content_container.style.display = 'none';
const loader = document.querySelector('.loader');
console.log(loader);
loader.style.display = 'block';
// console.log('loading....');

// search_item_to_display.addEventListener('keydown', search_item);
// function loading(e){
    
// }
// document.addEventListener('DOMContentLoaded', loading);

// const signin = document.querySelector('.signin');
// function gotosignin(){
//     // console.log('sign in link clicked');
//     window.location.replace('./signin.html');
// }
// signin.addEventListener('click', gotosignin);

// const signup = document.querySelector('.signup');
// function gotosignup(){
//     // console.log('sign in link clicked');
//     window.location.replace('./signup.html');
// }
// signin.addEventListener('click', gotosignup);