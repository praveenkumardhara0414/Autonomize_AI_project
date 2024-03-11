import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const ProductItemId = (props) => {
    const {details, rating} = props
    const {id, title, image, price, description} = details
    console.log(rating.rate)
    return (
        <div className='product-container'>
            <h1 className='product-heading'>{title}</h1>
            <img src={image} alt={`product${id}`} className='image-1'/>
            <p className='price'>Price: {price}</p>
            <div className='div-container-1'>
                <p className='para'>rating: {rating.rate}</p>
                <p className='para'>{rating.count} ratings</p>
            </div>
            <p className='description'>{description}</p>
        </div>
    )
}

class Product extends Component{
    state = {product: [], ratingItem: {} , isLoading: false}

    componentDidMount(){
        this.getProduct()
    }

    getProduct = async () => {

        const {match} = this.props
        this.setState({isLoading: true})
        const {params} = match
        const {id} = params
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
        const ratingResponse = await data.rating
        this.setState({product: data, ratingItem: ratingResponse, isLoading:false})
    }

    renderLoader = () => {
        return(
            <div className='product-container'>
                <Loader type="Oval" height={100} width={100} color='blue' />
            </div>
        )
    }

    render(){
        const {product, ratingItem, isLoading} = this.state
        switch (isLoading){
            case true:
                return this.renderLoader()
            case false:
                return <ProductItemId details={product} rating={ratingItem} />
            default:
                return ''
        }
    }
}

export default Product