'use client'
import React, { useEffect, useState } from 'react'
import styles from './PtoductCard.module.css';
import { Product } from '../page';






const ProductCard: React.FC<Product> = ({id, name, reason}) => {

    const [image, setImage] = useState<Blob>();
    const [loading, setLoading] = useState<boolean>(true);

    
    useEffect(() => {
      setImage(undefined);
      
      fetch("https://pfp-public-productdb-api.azurewebsites.net/api/picture/"+id)
        .then(response => {
          if(!response.ok){
              throw new Error();
          }
          return response.blob()
        
        })
        .then(blob => {
          setImage(blob)
          setLoading(false)
        })
        .catch(error => {
          setLoading(false)
        });
    },[]);
  
    const parse = require('html-react-parser');



  

  return (
    <div key={id} className="card card-bordered bg-base-100 shadow-xl text-sm m-2">
        {
         loading ? <span className="loading loading-spinner loading-lg"></span> : 
          (image && <figure><img src={URL.createObjectURL(image)} alt="Product image" /></figure>)
        }
        <div className="card-body">
            <h1 className="card-title text-sm">{name}</h1>
            {//<p>{parse(reason)}</p>
}
            <div className="card-actions justify-end">
                
            </div>
        </div>
    </div>
  )
}

export default ProductCard