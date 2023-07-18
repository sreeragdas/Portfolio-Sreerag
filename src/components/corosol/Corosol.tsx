import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Gym from '../../assets/images/gym.png';
import Travel from '../../assets/images/travel.png'
export const Corosol: React.FC = () => {
    return(
        <div>
                   <Carousel>
                <div>
                    <img src={Gym}/>
                    <p className="legend">   I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.</p>
                </div>
                <div>
                    <img src={Travel} />
                    <p className="legend">   I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.</p>
                </div>
             
            </Carousel>
        </div>
    );
}