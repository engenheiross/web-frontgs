import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {
  const [slidesPerView, setSlidePerView] = useState(2);

  const data = [
    {
      id: '1',
      image:
        'https://i0.wp.com/innovhome.com.br/wp-content/uploads/2017/10/economia-de-energia-6-dicas-para-um-consumo-consciente.png?fit=700%2C400&ssl=1',
    },
    {
      id: '2',
      image:
        'https://ocmcondominios.com.br/wp-content/uploads/2019/07/BLOG-POST-02_7-mitos-sobre-a-economia-de-energia-1200x600.jpg',
    },
    {
      id: '3',
      image:
        'https://sunwise.com.br/wp-content/uploads/2020/06/Economia-de-energia-no-condomi%CC%81nio-01-e1592944455779.png',
    },
    {
      id: '4',
      image:
        'https://portalsolar-images.s3.us-east-2.amazonaws.com/institucional-and-info-production/images/a7395b81-8533-46ac-9da8-c9e76c5a1b13/como-economizar-energia.jpg',
    },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerView(1);
      } else {
        setSlidePerView(2);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full min-h-screen max-w-[1440px] mx-auto  p-8">
      <h1 className="text-4xl font-bold text-center text-green-700">
        Bem Vindo à GREEN WATT
      </h1>
      <h2 className="mt-6 mb-8 text-2xl font-medium text-center text-gray-700">
        Economize energia com soluções inteligentes
      </h2>

      <Swiper
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        navigation
        className="mb-8"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="p-4 min-h-[300px]">
            <img
              src={item.image}
              alt="slideshow"
              className="w-full h-[400px] rounded-lg shadow-lg object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="max-w-3xl mx-auto text-center">
        <p className="mb-4 text-lg text-gray-700">
          GREEN WATT é uma solução para quem busca economizar energia e preservar o meio ambiente.
        </p>
        <p className="mb-4 text-gray-600 p-12">
        Transforme a forma como você gerencia o consumo de energia elétrica com nossa solução inteligente e sustentável. Reduza desperdícios, economize dinheiro e contribua para um futuro mais verde. Explore nossos recursos avançados e veja como podemos ajudar você a otimizar o consumo em sua residência ou empresa.
        </p>
      </div>
    </div>
  );
}

export default Home;
