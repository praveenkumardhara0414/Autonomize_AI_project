import {Link} from 'react-router-dom'
import './index.css'
const ProductComponet = (props) => {
    const {details} = props
    const {image, price, rating, title, id} = details
    return(
        <Link to={`/products/${id}`} className="link">
            <li className='list-conatiner'>
                <h1 className='title'>{title}</h1>
                <img src={image} alt={`product${id}`} className='image'/>
                <div className='div-container'>
                    <p>rating: {rating.rate}</p>
                    <p>rated: {rating.count}</p>
                </div>
                <h1 className='title'>Price: {price}</h1>
            </li>
        </Link>
    )
}
export default ProductComponet