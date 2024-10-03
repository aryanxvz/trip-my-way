
import React from 'react';
import { Carousel } from 'antd';

const App: React.FC = () => (
    <Carousel autoplay>
        <div className="2xl:h-[600px] 2xl:w-[450px] lg:h-[400px] lg:w-[300px]">
            <img 
                src="/slider1.png"
                alt="Slide 1" 
                className="h-full w-full object-cover" 
            />
        </div>
        <div className="2xl:h-[600px] 2xl:w-[450px] lg:h-[400px] lg:w-[300px]">
            <img 
                src="/slider2.png"
                alt="Slide 2" 
                className="h-full w-full object-cover" 
            />
        </div>
        <div className="2xl:h-[600px] 2xl:w-[450px] lg:h-[400px] lg:w-[300px]">
            <img 
                src="/slider3.png"
                alt="Slide 3" 
                className="h-full w-full object-cover" 
            />
        </div>
        <div className="2xl:h-[600px] 2xl:w-[450px] lg:h-[400px] lg:w-[300px]">
            <img 
                src="/slider4.png"
                alt="Slide 4" 
                className="h-full w-full object-cover" 
            />
        </div>
    </Carousel>
);

export default App;
