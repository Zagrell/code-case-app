"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard';
import ProductOverview from './components/ProductOverview';
import FilterOptions from './components/FilterOptions';

export interface Product {
    id: number;
    name: string;
    reason: string;
    productPictures: {pictureId: number}[];
}


const ProductsPage = () => {

    
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState<number>(1);

    const [searchText, setSearchText] = useState<string>("");
    const [complianceTypeIds, setComplianceTypeIds] = useState<number[]>([])

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      fetchProducts();
    },[complianceTypeIds])

    const fetchProducts = () => {

      let body = {
        "page": page,
        "pageSize": 9,
        "searchText": searchText,
        "complianceTypeIds": complianceTypeIds
      };

      setLoading(true);
      fetch("https://pfp-public-productdb-api.azurewebsites.net/api/product/search", {
        cache: "no-store",
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(json => {

        setProducts(json.results);
        setLoading(false);
      });
    }

    return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start justify-self-start">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Filter</label>

          {loading ?
            <span className="loading loading-spinner loading-lg"></span> :
            <ProductOverview products={products} />
            }

        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

            <FilterOptions searchText={searchText} setSearchText={setSearchText} fetchProducts={fetchProducts}
              complianceTypeIds={complianceTypeIds} setComplianceTypeIds={setComplianceTypeIds}
            />

          </div>
  
        </div>
      </div>  
    </>
     )
}

export default ProductsPage