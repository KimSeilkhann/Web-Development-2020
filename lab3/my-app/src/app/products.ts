import { Url } from 'url';

export interface Product {
    name: string,
    price: number,
    description: string, 
    rating: number,
    image: Url,
    link: Url
  }
  
  export const products = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      rating: 5,
      image: 'https://cdn.alza.cz/ImgW.ashx?fd=f3&cd=RI025b1',
      link: 'https://www.aliexpress.com/item/4000415778644.html?spm=a2g0o.productlist.0.0.665e1befpuxrpu&algo_pvid=be4c71b9-a2fe-439c-ade3-1143170f92a5&algo_expid=be4c71b9-a2fe-439c-ade3-1143170f92a5-1&btsid=0ab6f82415818800473053460e40b0&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      rating: 4,
      image: 'https://www.letemsvetemapplem.eu/bazar/wp-content/uploads/2020/01/0E931E7F-8172-446C-BB46-F6B306F911EC.png',
      link: 'https://www.aliexpress.com/item/4000439155439.html?spm=a2g0o.productlist.0.0.2ab91a33E6xd79&algo_pvid=ec2455ee-ed74-4dc4-aa2e-c13ac7a08601&algo_expid=ec2455ee-ed74-4dc4-aa2e-c13ac7a08601-1&btsid=0ab6f82415818810077534726e40ac&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: 'blabla',
      rating: 4,
      image:'https://static.datart.cz/Smartphone-Apple-iPhone-8-Plus-256GB-zlata/media_3633717.jpg?size=500',
      link:'https://www.aliexpress.com/item/32829794248.html?spm=a2g0o.productlist.0.0.36c65a79VhK1G5&algo_pvid=8672b486-9279-4751-bedf-98c5a4f42093&algo_expid=8672b486-9279-4751-bedf-98c5a4f42093-2&btsid=0ab6f82115818810472678210e09fe&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    },
    {
      name: 'IPhone 11 case',
      price: 4,
      description: 'case for your iphone 11 in different colors',
      rating: 5,
      image: 'https://www.chytremobilnitelefony.cz/fotky62781/fotos/_vyr_648_iphone-11-pro-max-gold-select-2019.png',
      link:'https://www.aliexpress.com/item/32792994171.html?spm=a2g0o.productlist.0.0.393b4e05IlUfM7&algo_pvid=dfe53ecf-359f-4197-b90f-42a161af6ac1&algo_expid=dfe53ecf-359f-4197-b90f-42a161af6ac1-2&btsid=0ab6f82115818810886362933e0a02&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    },
    {
      name: 'IPhone 8 case',
      price: 5,
      description: 'case for your iphone 8 in different colors',
      rating: 3.5,
      image: 'https://cdn-image02.casetify.com/usr/4787/34787/~v28/5522071_iphone8-plus_410700.png.560x560-w.m80.jpg',
      link:'https://www.aliexpress.com/item/4000351179987.html?spm=a2g0o.productlist.0.0.393b4e05IlUfM7&algo_pvid=dfe53ecf-359f-4197-b90f-42a161af6ac1&algo_expid=dfe53ecf-359f-4197-b90f-42a161af6ac1-5&btsid=0ab6f82115818810886362933e0a02&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    },
    {
      name: 'IPhone 7 case',
      price: 4,
      description: 'case for your iphone 7 in different colors',
      rating: 3,
      image: 'https://cdn.shopify.com/s/files/1/0054/3480/2274/products/lila1_grande.jpg?v=1575432396',
      link:'https://www.aliexpress.com/item/4000549854860.html?spm=a2g0o.productlist.0.0.280f3745nWVZjE&algo_pvid=29041fce-eb00-4e85-adb6-a92f5da5e7ea&algo_expid=29041fce-eb00-4e85-adb6-a92f5da5e7ea-7&btsid=0ab6f82215818813501214316e7c01&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    },
    {
      name: 'IPhone 6 case',
      price: 3,
      description: 'case for your iphone 6 in different colors',
      rating: 3,
      image:'https://cdn.shopify.com/s/files/1/0591/6361/products/White-Marble_037bab9a-f290-44ff-a29c-1ce23e0c630a_1024x1024.jpg?v=1568917816',
      link: 'https://www.aliexpress.com/item/4000206171403.html?spm=a2g0o.productlist.0.0.280f3745nWVZjE&algo_pvid=29041fce-eb00-4e85-adb6-a92f5da5e7ea&algo_expid=29041fce-eb00-4e85-adb6-a92f5da5e7ea-5&btsid=0ab6f82215818813501214316e7c01&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    },
    {
      name: 'Xiomi',
      price: 200,
      description: 'Great phone',
      rating: 5,
      image: 'https://d25-a.sdn.szn.cz/d_25/c_img_F_HL/u3jx82.jpeg',
      link: 'https://www.aliexpress.com/item/4000229457648.html?spm=a2g0o.productlist.0.0.22693181vAa5Wa&algo_pvid=f9ddd307-c2d4-4bfc-91b0-43fd7e3abfa7&algo_expid=f9ddd307-c2d4-4bfc-91b0-43fd7e3abfa7-0&btsid=0ab6f82215818814695601828e7cf1&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    },   
    {
      name: 'Xiomi case',
      price: 3,
      description: 'case for your Xiomi in different colors',
      rating: 4,
      image:'https://images-na.ssl-images-amazon.com/images/I/61xjFxc-LrL._AC_SX466_.jpg',
      link: 'https://www.aliexpress.com/item/4000229457648.html?spm=a2g0o.productlist.0.0.22693181vAa5Wa&algo_pvid=f9ddd307-c2d4-4bfc-91b0-43fd7e3abfa7&algo_expid=f9ddd307-c2d4-4bfc-91b0-43fd7e3abfa7-0&btsid=0ab6f82215818814695601828e7cf1&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    },

    {
      name: 'Samsung s9',
      price: 300,
      description: 'Useful phone on Android',
      rating: 5,
      image: 'https://im9.cz/iR/importprodukt-orig/68a/68aebe184574c48532b888137393cf38.jpg',
      link: 'https://www.aliexpress.com/item/32957268217.html?spm=a2g0o.productlist.0.0.44971ad8vefXg6&algo_pvid=647634f2-d49f-41f4-a919-5346b69861cd&algo_expid=647634f2-d49f-41f4-a919-5346b69861cd-0&btsid=0ab6f82115818815317553424e0a18&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    },
 
  ];