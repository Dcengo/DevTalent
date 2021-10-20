import React, {Component} from 'react';
import './Referances.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);






class Referances extends Component {

    render() {
        // eslint-disable-next-line react-hooks/rules-of-hooks




        return (
            <div className={'referances'}>
               <div className={'container nw-relative'}>
                   <div className={'top'}>
                       <h5 className={'title'}>Referances</h5>
                   </div>
                    <div className={'web-wd'}>
    <Swiper

        spaceBetween={50}
        slidesPerView={3}
        pagination={{
            "clickable": true
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>
            <div className={'slide-in'}>
                <div className={'top'}>
                    <img className={'circle'} alt={'avatar'} src={'https://avatars.githubusercontent.com/u/46896973?v=4'}/>
                    <div className={'right'}>
                        <h5 className={'name'}>Jane Doe</h5>
                        <h5 className={'title'}>Web Developer</h5>
                    </div>
                </div>
                <div className={'mid'}>
                    <h5 className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                </div>
                <div className={'bottom'}>
                    <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={5} precision={0.5} />

                    </Stack>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={'slide-in'}>
                <div className={'top'}>
                    <img className={'circle'}  alt={'avatar'} src={'https://avatars.githubusercontent.com/u/46896973?v=4'}/>
                    <div className={'right'}>
                        <h5 className={'name'}>Jane Doe</h5>
                        <h5 className={'title'}>Web Developer</h5>
                    </div>
                </div>
                <div className={'mid'}>
                    <h5 className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                </div>
                <div className={'bottom'}>
                    <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={5} precision={0.5} />

                    </Stack>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={'slide-in'}>
                <div className={'top'}>
                    <img className={'circle'}  alt={'avatar'} src={'https://avatars.githubusercontent.com/u/46896973?v=4'}/>
                    <div className={'right'}>
                        <h5 className={'name'}>Jane Doe</h5>
                        <h5 className={'title'}>Web Developer</h5>
                    </div>
                </div>
                <div className={'mid'}>
                    <h5 className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                </div>
                <div className={'bottom'}>
                    <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={5} precision={0.5} />

                    </Stack>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={'slide-in'}>
                <div className={'top'}>
                    <img className={'circle'}  alt={'avatar'} src={'https://avatars.githubusercontent.com/u/46896973?v=4'}/>
                    <div className={'right'}>
                        <h5 className={'name'}>Jane Doe</h5>
                        <h5 className={'title'}>Web Developer</h5>
                    </div>
                </div>
                <div className={'mid'}>
                    <h5 className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                </div>
                <div className={'bottom'}>
                    <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={5} precision={0.5} />

                    </Stack>
                </div>
            </div>
        </SwiperSlide>

    </Swiper>
</div>
                    <div className={'mobile-wd'}>
                       <Swiper

                           spaceBetween={50}
                           slidesPerView={1}
                           pagination={{
                               "clickable": true
                           }}
                           onSlideChange={() => console.log('slide change')}
                           onSwiper={(swiper) => console.log(swiper)}
                       >
                           <SwiperSlide>
                               <div className={'slide-in'}>
                                   <div className={'top'}>
                                       <img className={'circle'} alt={'avatar'} src={'https://avatars.githubusercontent.com/u/46896973?v=4'}/>
                                       <div className={'right'}>
                                           <h5 className={'name'}>Jane Doe</h5>
                                           <h5 className={'title'}>Web Developer</h5>
                                       </div>
                                   </div>
                                   <div className={'mid'}>
                                       <h5 className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                                   </div>
                                   <div className={'bottom'}>
                                       <Stack spacing={1}>
                                           <Rating name="half-rating" defaultValue={5} precision={0.5} />

                                       </Stack>

                                   </div>
                               </div>
                           </SwiperSlide>
                           <SwiperSlide>
                               <div className={'slide-in'}>
                                   <div className={'top'}>
                                       <img className={'circle'}  alt={'avatar'} src={'https://avatars.githubusercontent.com/u/46896973?v=4'}/>
                                       <div className={'right'}>
                                           <h5 className={'name'}>Jane Doe</h5>
                                           <h5 className={'title'}>Web Developer</h5>
                                       </div>
                                   </div>
                                   <div className={'mid'}>
                                       <h5 className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                                   </div>
                                   <div className={'bottom'}>
                                       <Stack spacing={1}>
                                           <Rating name="half-rating" defaultValue={5} precision={0.5} />

                                       </Stack>
                                   </div>
                               </div>
                           </SwiperSlide>
                           <SwiperSlide>
                               <div className={'slide-in'}>
                                   <div className={'top'}>
                                       <img className={'circle'}  alt={'avatar'} src={'https://avatars.githubusercontent.com/u/46896973?v=4'}/>
                                       <div className={'right'}>
                                           <h5 className={'name'}>Jane Doe</h5>
                                           <h5 className={'title'}>Web Developer</h5>
                                       </div>
                                   </div>
                                   <div className={'mid'}>
                                       <h5 className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                                   </div>
                                   <div className={'bottom'}>
                                       <Stack spacing={1}>
                                           <Rating name="half-rating" defaultValue={5} precision={0.5} />

                                       </Stack>
                                   </div>
                               </div>
                           </SwiperSlide>
                           <SwiperSlide>
                               <div className={'slide-in'}>
                                   <div className={'top'}>
                                       <img className={'circle'}  alt={'avatar'} src={'https://avatars.githubusercontent.com/u/46896973?v=4'}/>
                                       <div className={'right'}>
                                           <h5 className={'name'}>Jane Doe</h5>
                                           <h5 className={'title'}>Web Developer</h5>
                                       </div>
                                   </div>
                                   <div className={'mid'}>
                                       <h5 className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                                   </div>
                                   <div className={'bottom'}>
                                       <Stack spacing={1}>
                                           <Rating name="half-rating" defaultValue={5} precision={0.5} />

                                       </Stack>
                                   </div>
                               </div>
                           </SwiperSlide>

                       </Swiper>
                   </div>

               </div>
            </div>
        );
    }
}

export default Referances;