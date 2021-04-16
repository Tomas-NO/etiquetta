import './product.scss'

export const Product = ({title, size, brand}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{size}</p>
            <p>{brand}</p>
        </div>
    )
}