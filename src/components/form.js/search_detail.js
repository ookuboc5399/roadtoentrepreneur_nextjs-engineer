import Link from 'next/link'
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import axios from 'axios'


export default function Home({ data }) {
  const [formData, setFormData] = useState({
    name1: '',
  })
  const [itemData,setItemData] = useState([])
  const {
    name1,
  } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const res = await axios.get(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=${name1}&applicationId=1041325084269081277`)
 
    const items = res.data.Items
    setItemData(items)

  }
  return (
    <div>
      <div className="flex justify-center flex-col items-center mb-10">
        <div className="mb-3 text-2xl">楽天</div>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <div className="m-4  text-center" htmlFor="name">
              気になる商品を調べる
            </div>
            <div className='flex'>
              <input
                className="border border-yellow-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
                type="text"
                name="name1"
                placeholder="商品名で検索"
                onChange={onChange}
                value={name1}
                required
              />
              <div className="flex justify-center ml-5">
                <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded min-w-max" type="submit" >
                  検索
                </button>
              </div>
            </div>
          </div>

        </form>

        <div className="border w-14"></div>
        {itemData && itemData.map((data) => {
          console.log(data)
          return (
            <div key={index}>
              <div>
                <Image src={data.Item.smallImageUrls[0].imageUrl} alt='' />
              </div>
              <div>
              {data.Item.itemName}
              </div>
              <div>
              {data.Item.itemPrice}円
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  );
}



