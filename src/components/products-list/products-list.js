import './products-list.scss'
import {Product} from '../product/product'

export const ProductsList = (props) => {
    return props.products.map((product) => (
        <Product 
            title={product.name}
            size={product.size}
            brand={product.brand}
        />
    ))
}