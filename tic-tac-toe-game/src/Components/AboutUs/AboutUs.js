import './../../style/AboutUs/AboutUs-micro-components/aboutUs.css'
import './../../style/main.css'
import { WelcomeTo } from './AboutUs-micro-components/WelcomeTo'
import { AboutCompany } from './AboutUs-micro-components/AboutCompany'
import { OurMission } from './AboutUs-micro-components/OurMission'
import { OurExpirience } from './AboutUs-micro-components/OurExpirience'


export const AboutUs = () => {


    return(
        <>
        <div className="aboutUs_container pos">
           <div className='aboutUs_wrapper'>

            <WelcomeTo/>

            <AboutCompany/>

            <OurMission/>

            <OurExpirience/>

           </div>
        </div>
    </>
    )
}
