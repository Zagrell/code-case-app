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
            <div className='grid grid-cols-2 md:grid-cols'>
                {products.length > 0 ? 
                products.map(product => 
                 <ProductCard id={product.id} name={product.name} reason={product.reason}></ProductCard>
                ) : <NoElementsFound/>
}
            </div>
        </div>
  )
}

export default ProductOverview