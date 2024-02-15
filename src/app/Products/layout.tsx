"use client"

import React, { useEffect, useState } from 'react';
import ProductModel from '@/Models/ProductModel';
import AxiosService from '../App Common/AxiosService';
import Products from './page';

const Layout = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await AxiosService.get('Users/getAll', {
          success: (data: any) => {
            if (data && data.users) {
              const productsData: ProductModel[] = data.users;
              setProducts(productsData);
            }
          },
          failed: (data: any) => {
            console.log('Failed to fetch products:', data);
          },
          error: (error: any) => {
            console.log('Error fetching products:', error);
          }
        });

        // Optionally handle response status codes, etc.
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array: run once on component mount

  return (
    <Products products={products} />
  );
};

export default Layout;
