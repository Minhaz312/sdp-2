import React from 'react'
import Layout from '../components/Layout'

export default function ProductDetails() {
  return (
    <Layout>
        <div className='grid grid-cols-12 bg-white my-3'>
            <div className='col-span-5'>
                <img src="https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1200&format=pjpg&exif=1&iptc=1" style={{height:"500",width:"100%",objectFit:"cover"}} />
            </div>
            <div className='col-span-7'>
                <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</h1>
            </div>
        </div>
    </Layout>
  )
}
