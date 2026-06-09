import { products } from "../../data";
import Product from "../product/Product";
import "./productlist.css";

const ProductList = () => {
  return (
    <div id="productId" className="pro-list">
      <div className="pl-texts">
        <h1 className="pl-title">My Project List</h1>
        <p className="pl-desc">
          {/* Here are my project List. I provide Github link of every project which
          I have completed from beginning of my learning process. You can visit
          my all repository in Github. Some project I have done are listed
          below. */}
          Here are some of the personal projects I have built and published on
          GitHub throughout my learning and professional journey. These projects
          showcase my experience in frontend development, scalable architectures,
          real-time systems, API integration, and modern web technologies using
          React, Svelte, TypeScript, Redux Toolkit, and more.

        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
