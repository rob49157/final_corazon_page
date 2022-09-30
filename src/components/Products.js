import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import commerce from '../lib/Commerce';
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [servicePrice, setservicePrice] = useState(0);
    const [radioSelected, setRadioSelected] = useState(0);

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
    };


    const updateServiceChange = (service_price) => {
        // serviceValue = service_price;
        setRadioSelected(1);
        setservicePrice(service_price);
    };

    const initialOptions = {
        "client-id": "test",
        currency: "USD",
        intent: "capture"
    };

    return (

        <div className="products" id="products">
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    updateServiceChange={updateServiceChange}
                />
            ))}

            {radioSelected &&
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons forceReRender={[servicePrice]}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: servicePrice,
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            alert(`Transaction completed by ${name}`);
                        });
                    }}
                />
            </PayPalScriptProvider>
            }
        </div>

    );
};

Products.propTypes = {
    products: PropTypes.array,
};

export default Products;
