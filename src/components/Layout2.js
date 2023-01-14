import Head from 'next/head'
import Footer_stock_detail_brand from './footer/footer_stock_detail_brand'


export default function Layout2(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{props.title}</title>
      </Head>
      {/* <div> */}
      <div className="flex-1 justify-center min-w-full bg-gray-200">
        {props.children}
      </div>
      <div>
      <Footer_stock_detail_brand />
      </div>
    </div>
  )
}