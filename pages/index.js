import Head from 'next/head';
import { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import { HeroSliderCard } from '../components/HeroSliderCard';
import OrderForm from '../components/OrderForm';
import LightBox from '../components/LightBox';
import { TestimonialSliderCard } from '../components/TestimonialSliderCard';
import InfoCard from '../components/InfoCard';
import InfoSection from '../components/InfoSection';
import Product from '../components/Product';
import products from './api/product.json';
import testimonialData from './api/testimonials.json';
import sliderdata from './api/sliders.json';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'heroSlider'
};

const settings1 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'testimonial'
};

export default function Home() {
  const [selecteItem, setSelecteItem] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const onOpenModal = (item) => {
    setSelecteItem(item);
    setOpen(true);
  };
  const onCloseModal = () => {
    setSelecteItem(null);
    setOpen(false);
  };

  const onClickView = (item) => {
    setSelecteItem(item);
    setIsOpen(true)
  };

  const onCloseLightBox = () => {
    setIsOpen(false)
    setSelecteItem(null);
  }

  const onFormSubmit = (data) => {
    console.log(data);
    onCloseModal()
  }

  return (
    <div className="flex flex-col  min-h-screen">
      <Head>
        <title>Kraftcorner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col">
        <div className="relative">
          {/* <div className="absolute inset-0 z-10 bg-red-200 bg-opacity-50" /> */}
          <Slider sliderType={HeroSliderCard} settings={settings} data={sliderdata} />
        </div>

        <div className="flex flex-col md:flex-row w-full space-x-0 md:space-x-8 space-y-4 md:space-y-0 mt-10 px-4 md:px-16 lg:px-24 max-w-6xl mx-auto">
          <InfoCard title="10+" description="Articles For Sale" />
          <InfoCard title="One-stop Shop" description="For Handmade Articles" />
          <InfoCard title="Customized" description="Articles As Per Requirement" />
        </div>

        <div className="flow-root px-4 md:px-16 lg:px-24 mt-10 md:mt-20 max-w-6xl mx-auto">
          <h1 className="text-center font-bold text-4xl">New Arrivals</h1>
          <div className="-m-2 flex flex-wrap mt-8">
            {products?.map(({ id, images, name, price }) =>
              <Product
                key={id}
                proudctImage={images}
                name={name}
                price={price}
                onOpenModal={onOpenModal}
                onCloseModal={onCloseModal}
                onClickView={onClickView}
              />
            )}
          </div>
        </div>

        <div className="flex justify-center items-center px-4 md:px-16 lg:px-24 max-w-6xl mx-auto">
          <div className="relative w-full shadow-lg rounded-none bg-gray-100 testimonial-wrapper my-8 md:my-20 py-20 px-8 md:px-24 text-center">
            <span className="absolute top-10 left-10 text-6xl text-gray-50">&#8220;</span>
            <Slider sliderType={TestimonialSliderCard} settings={settings1} data={testimonialData} />
          </div>
        </div>

        <InfoSection />

      </main>

      <Footer />

      <Modal open={open} onClose={onCloseModal} center classNames={{ modal: 'w-full lg:w-1/2' }}>
        <OrderForm selecteItem={selecteItem} onFormSubmit={onFormSubmit} />
      </Modal>

      <LightBox isOpen={isOpen} photoIndex={photoIndex} images={selecteItem?.proudctImage} setPhotoIndex={setPhotoIndex} onCloseLightBox={onCloseLightBox} />

    </div >
  )
}
