import './App.scss'
import { ItemListContainer } from './components/item-list-container/item-list-container'
import { NavBar } from './components/navbar/navbar'
import { ProductsList } from './components/products-list/products-list'


function App() {
    const products = [
        {
            name:'remera',
            size:'L',
            brand:'Zara'
        },
        {
            name:'remera2',
            size:'L',
            brand:'Zara'
        },
        {
            name:'remera3',
            size:'L',
            brand:'Zara'
        },
        {
            name:'remera4',
            size:'L',
            brand:'Zara'
        }
    ]
    return ( 
        <div className='App'>
            <NavBar /> 
            <ItemListContainer greeting={'Esto es el ItemListContainer'}/>
            <ProductsList products={products}/>
        </div>
    )
}

export default App