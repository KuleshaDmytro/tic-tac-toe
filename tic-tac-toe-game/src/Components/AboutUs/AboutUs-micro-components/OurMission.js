import './../../../style/AboutUs/AboutUs-micro-components/ourMission.css'
import './../../../style/AboutUs/aboutUs_main.css'


export const OurMission = () => {

    return(
        <main className='aboutUs_micro_container ourMission_container'>
            {/* <div className='aboutUs_card'> */}
                <div className='ourMission aboutUs_retreat'>
                    <h3 className='aboutUs_tittle'>Our Mission</h3>
                    <p className='aboutUs_text-decoration-left'>Our mission is to bring the joy of gaming to the online world, providing users with captivating experiences that keep them entertained and coming back for more. We believe that games have the power to create memorable moments, foster connections, and spark imagination.</p>
                    <p className='aboutUs_text-decoration-left'>With our expertise in web development, we combine cutting-edge technologies and innovative design to deliver websites that not only look stunning but also provide seamless gameplay experiences. Whether it's a casual game, an interactive educational platform, or an adrenaline-pumping adventure, we have the skills and creativity to bring your vision to life.</p>
                </div>
                <div className="ourMissionImg aboutUs_retreat">

                    <div className='img_ourMission'></div>

                </div>
            {/* </div> */}
        </main>
    )
}