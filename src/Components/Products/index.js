import { Component } from 'react'
import ProductComponet from '../ProductComponent'
import './index.css'

class Login extends Component{
    state = {menProducts: [], womenProducts: [], jewelleryProducts: [], electronicsProducts: []}

    componentDidMount(){
        this.getProducts()
    }

    getProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        this.setState({isLoading: true})
        const data = await response.json()
        const menProductsList = data.filter(eachProduct => eachProduct.category === "men's clothing")
        const womenProductsList = data.filter(eachProduct => eachProduct.category === "women's clothing")
        const jewelleryProductsList = data.filter(eachProduct => eachProduct.category === "jewelery")
        const electronicsProductsList = data.filter(eachProduct => eachProduct.category === "electronics")
        this.setState({menProducts: menProductsList, womenProducts: womenProductsList, jewelleryProducts: jewelleryProductsList, electronicsProducts: electronicsProductsList, isLoading: false})
    }

    

    render(){
        const {menProducts, womenProducts, jewelleryProducts, electronicsProducts} = this.state
        return(
            <div className='project-container'>
                <div className='products-container'>
                    <h1>Products</h1>
                    <div>
                        <div>
                            <h1 className='men-heading'>Men category</h1>
                            <ul className='ul-conatiner'>
                                {menProducts.map(eachProduct => <ProductComponet details={eachProduct} key={eachProduct.id}/>)}
                            </ul>
                        </div>
                        <div>
                            <h1 className='men-heading'>Women category</h1>
                            <ul className='ul-conatiner'>
                                {womenProducts.map(eachProduct => <ProductComponet details={eachProduct} key={eachProduct.id}/>)}
                            </ul>
                        </div>
                        <div>
                            <h1 className='men-heading'>Jewelery</h1>
                            <ul className='ul-conatiner'>
                                {jewelleryProducts.map(eachProduct => <ProductComponet details={eachProduct} key={eachProduct.id}/>)}
                            </ul>
                        </div>
                        <div>
                            <h1 className='men-heading'>Electronics</h1>
                            <ul className='ul-conatiner'>
                                {electronicsProducts.map(eachProduct => <ProductComponet details={eachProduct} key={eachProduct.id}/>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login