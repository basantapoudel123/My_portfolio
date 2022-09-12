import './productlist.css'
import Product from '../product/Product'
import { products } from '../../data'

const ProductList = () => {
    return (
        <div className='pro-list'>
            <div className="pl-texts">
                <h1 className='pl-title'>
                    My Project List
                </h1>
                <p className='pl-desc'>
                Here are my project List. I provide 
                Github link of every project which I
                have completed from beginning of my learning 
                process. You can visit my all repository in Github.
                Some project I have done are listed below.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}    
            </div>
        </div>
    )
}

export default ProductList;