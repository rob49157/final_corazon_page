import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import commerce from '../lib/Commerce';
import Contact from './Contact'

const Products = ({onAddToCart}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);


    /**
     * Fetch products data from Chec and stores in the products data object.
     * https://commercejs.com/docs/sdk/products
     */
    const fetchProducts = () => {
        commerce.products.list().then((products) => {
            setProducts(products.data);
        }).catch((error) => {
            console.log('There was an error fetching the products', error)
        });


    }
    return (

        <div className="products" id="products">
            <script src="./paypal.js"/>
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>

    );
};

Products.propTypes = {
    products: PropTypes.array,
};

export default Products;

// <div id="smart-button-container">
//     <div style="text-align: center;">
//         <div style="margin-bottom: 1.25rem;">
//             <select id="item-options"><option value="10 minutes" price="20">10 minutes - 20 USD</option><option value="30 minutes" price="60">30 minutes - 60 USD</option><option value="60 minutes" price="100">60 minutes - 100 USD</option></select>
//             <select style="visibility: hidden" id="quantitySelect"></select>
//         </div>
//         <div id="paypal-button-container"></div>
//     </div>
// </div>
// <script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"></script>
// <script>
//     function initPayPalButton() {
//     var shipping = ;
//     var itemOptions = document.querySelector("#smart-button-container #item-options");
//     var quantity = parseInt();
//     var quantitySelect = document.querySelector("#smart-button-container #quantitySelect");
//     if (!isNaN(quantity)) {
//     quantitySelect.style.visibility = "visible";
// }
//     var orderDescription = 'Pick your doom';
//     if(orderDescription === '') {
//     orderDescription = 'Item';
// }
//     paypal.Buttons({
//     style: {
//     shape: 'pill',
//     color: 'gold',
//     layout: 'vertical',
//     label: 'paypal',
//
// },
//     createOrder: function(data, actions) {
//     var selectedItemDescription = itemOptions.options[itemOptions.selectedIndex].value;
//     var selectedItemPrice = parseFloat(itemOptions.options[itemOptions.selectedIndex].getAttribute("price"));
//     var tax = (7 === 0 || false) ? 0 : (selectedItemPrice * (parseFloat(7)/100));
//     if(quantitySelect.options.length > 0) {
//     quantity = parseInt(quantitySelect.options[quantitySelect.selectedIndex].value);
// } else {
//     quantity = 1;
// }
//
//     tax *= quantity;
//     tax = Math.round(tax * 100) / 100;
//     var priceTotal = quantity * selectedItemPrice + parseFloat(shipping) + tax;
//     priceTotal = Math.round(priceTotal * 100) / 100;
//     var itemTotalValue = Math.round((selectedItemPrice * quantity) * 100) / 100;
//
//     return actions.order.create({
//     purchase_units: [{
//     description: orderDescription,
//     amount: {
//     currency_code: 'USD',
//     value: priceTotal,
//     breakdown: {
//     item_total: {
//     currency_code: 'USD',
//     value: itemTotalValue,
// },
//     shipping: {
//     currency_code: 'USD',
//     value: shipping,
// },
//     tax_total: {
//     currency_code: 'USD',
//     value: tax,
// }
// }
// },
//     items: [{
//     name: selectedItemDescription,
//     unit_amount: {
//     currency_code: 'USD',
//     value: selectedItemPrice,
// },
//     quantity: quantity
// }]
// }]
// });
// },
//     onApprove: function(data, actions) {
//     return actions.order.capture().then(function(orderData) {
//
//     // Full available details
//     console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
//
//     // Show a success message within this page, e.g.
//     const element = document.getElementById('paypal-button-container');
//     element.innerHTML = '';
//     element.innerHTML = '<h3>Thank you for your payment!</h3>';
//
//     // Or go to another URL:  actions.redirect('thank_you.html');
//
// });
// },
//     onError: function(err) {
//     console.log(err);
// },
// }).render('#paypal-button-container');
// }
//     initPayPalButton();
// </script>