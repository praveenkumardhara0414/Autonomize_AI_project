import {Link} from 'react-router-dom'
import './index.css'
const Home = () => {
    
    return (
        <div className='header-1'>
            <div className='header'>
                <Link to="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="home" height={40} width={40} className='home-image' />
                </Link>
                <Link to="/" className="link">
                    <h1 >Products</h1>
                </Link>
            </div>
        </div>
    )
}

export default Home