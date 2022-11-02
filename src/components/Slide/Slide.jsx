import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slide.css';
import { EffectFade } from 'swiper';


const Slide = () => {
    return (
        <Swiper
            modules={[EffectFade]}
            effect='fade'
            spaceBetween={1}
            slidesPerView={1}
            grabCursor={true}
            className='portfolio-slider'
        >
            <SwiperSlide>
                <div className='foto'
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1628683332372-baf5d6a35c5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=801740w)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '40rem',
                        width: '100%',
                    }}
                >
                    <h1
                        id="text1"
                        style={{
                            position: 'absolute',
                            justifyContent: 'center',
                            left: '30%',
                            top: '20%',
                            color: 'white',
                            fontWeight: 'bold'
                        }}>
                        Já escolheu seu destino hoje?
                    </h1>
                    <h5
                        style={{
                            position: 'absolute',
                            justifyContent: 'center',
                            left: '30%',
                            right: '25%',
                            top: '40%',
                            color: 'white'
                        }}
                    >
                        Venha desfrutar de lugares maravilhosos com segurança e
                        qualidade,<br />
                        que só O mochileiro Viagens pode te oferecer
                    </h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='foto'
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=801746w)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '40rem',
                        width: '100%',
                    }}
                >
                </div>
                <h1
                    id="text1"
                    style={{
                        position: 'absolute',
                        justifycontent: 'center',
                        left: '30%',
                        top: '20%',
                        color: 'white',
                        fontweight: 'bold'
                    }}
                >
                    Por que viajar?
                </h1>
                <h5
                    style={{
                        position: 'absolute',
                        justifycontent: 'center',
                        left: '30%',
                        right: '25%',
                        top: '40%',
                        color: 'white'
                    }}
                >
                    Viajar quebra a rotina, te faz dar uma pausa, esquecer os problemas, as obrigações do trabalho e tirar um tempo para ficar na companhia de quem você mais ama.
                </h5>
            </SwiperSlide>
            <SwiperSlide>
                <div className='foto'
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1632798121054-c6b73cc9e8b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=801888w)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '40rem',
                        width: '100%',
                    }}
                >
                </div>
                <h1
                    id="text1"
                    style={{
                        position: 'absolute',
                        justifycontent: 'center',
                        left: '30%',
                        top: '20%',
                        color: 'white',
                        fontweight: 'bold'
                    }}
                >
                    Por que escolher O Mochileiro?
                </h1>
                <h5
                    style={{
                        position: 'absolute',
                        justifycontent: 'center',
                        left: '30%',
                        right: '25%',
                        top: '40%',
                        color: 'white'
                    }}
                >
                    Te ajudamos a escolher o melhor destino com o melhor preço para você colecionar memórias inesquecíveis
                </h5>
            </SwiperSlide>
        </Swiper>
    );
};
export default Slide;