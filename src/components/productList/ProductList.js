import './productlist.css'
import Product from '../product/Product'
import { products } from '../../data'

const ProductList = () => {
    return (
        <div className='pro-list'>
            <div className="pl-texts">
                <h1 className='pl-title'>
                    Create & Delete. It's Lama.
                </h1>
                <p className='pl-desc'>
                Lama Dompin is a carefully crafted portfolio 
                template for freelance creatives. The design is
                 made in a clean style, which makes the website 
                 memorable.Alternatively, you can contact me directly
                  by email or send your message on the Support Tab.
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