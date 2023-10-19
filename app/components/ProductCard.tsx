'use client'
import React, { useEffect, useState } from 'react'
import styles from './PtoductCard.module.css';
import { Product } from '../page';


const ProductCard: React.FC<Product> = ({id, name, reason, productPictures}) => {

    const [image, setImage] = useState<Blob>();
    const [loading, setLoading] = useState<boolean>(true);

    
    useEffect(() => {

      if(!productPictures){
        setLoading(false)
        return
      }
        fetch("https://pfp-public-productdb-api.azurewebsites.net/api/picture/"+productPictures[0].pictureId)
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
            setImage(undefined)
          });
          
    },[]);
  
  return (
    <div key={id} className="card card-bordered bg-base-100 shadow-xl h-96 text-sm m-2">
        {
         loading ? <span className="loading loading-spinner loading-lg"></span> : 
          (image && <figure><img src={URL.createObjectURL(image)} alt=""/></figure>) || <div />
        }
        <div className="card-body">
            <h1 className="card-title text-sm">{name}</h1>
            <div className="card-actions justify-end">
                
            </div>
        </div>
    </div>
  )
}

export default ProductCard