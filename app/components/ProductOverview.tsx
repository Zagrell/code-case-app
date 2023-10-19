import React from 'react'
import ProductCard from './ProductCard'
import { Product } from '../page'
import NoElementsFound from './NoElementsFound';

type Props = {
    products: Product[];
}

const ProductOverview =  (props: Props) => {
    const {products} = props;


    return (
        <div> 
            <div className='grid grid-cols-2 lg:grid-cols-3'>
                {products.length > 0 ? 
                products.map(product => 
                 <ProductCard key={product.id} id={product.id} name={product.name} reason={product.reason} productPictures={product.productPictures}></ProductCard>
                ) :
                 <NoElementsFound/>
}
            </div>
        </div>
  )
}

export default ProductOverview