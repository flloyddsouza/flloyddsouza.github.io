import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
const Testimonial = () => {
  return (
    <div className="aali_tm_section" id="testimonial">
      <div className="aali_tm_testimonials">
        <div className="left">
        </div>
        <div className="right">
          <div className="right_in">
            <div
              className="aali_tm_main_title"
              data-text-align="left"
              data-color="light"
            >
              <span>Testimonial</span>
              <h3>What People Say</h3>
            </div>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              loop={true}
              pagination={false}
              navigation={{
                prevEl: ".prev_button",
                nextEl: ".next_button",
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className="item">
                <div className="text">
                  <p style={{fontSize: '16px', marginBottom: '16px'}}>
                    I have had a good time mentoring Flloyd Dsouza through his Postgraduate Industrial Experience project, capstone units where students work in teams to produce the commercial based application. From this unit, I was impressed by his initiative and engaging.
                  </p>
                  <p style={{fontSize: '16px', marginBottom: '16px'}}> 
                    He led the team to identify the problems and devise solutions and updating the progress with me at a timely manner. I believe Flloyd has shown great intelligence with a mind well-suited to the world of business and management.
                  </p>
                  <p style={{fontSize: '16px'}}> 
                    I believe he has equipped himself with the right skills and ability to achieve the success process. I would highly recommend him for a position in your organization. 
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Paul Liu (Mentor), <span>Monash University</span>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="text">
                  <p style={{fontSize: '16px', marginBottom: '16px'}}>
                    It has been my pleasure tutoring Flloyd in Mobile and Distributed Computing Systems Unit at Monash University. I remember Flloyd vividly since he was the one in the class to interact more and ask questions. I was consistently impressed by his curiosity and his problem solving attitude.
                  </p>
                  <p style={{fontSize: '16px'}}> 
                    He always submitted his work on time with the highest standards. I would highly recommend Flloyd, he would definitely be a gem to any team he joins. 
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Paras Sitoula (Mentor), <span>Monash University</span>
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="direct">
              <a className="prev_button">
                <i className="icon-left" />
              </a>
              <a className="next_button">
                <i className="icon-right" />
              </a>
            </div>
          </div>
        </div>
        <span className="border">
          <span
            className="in moving_effect"
            data-direction="x"
            data-reverse="yes"
          />
        </span>
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span className="quote moving_effect" data-direction="x">
          <i className="icon-quote-left" />
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
