import './../../../style/AboutUs/AboutUs-micro-components/welcomeTo.css'
import './../../../style/AboutUs/aboutUs_main.css'


export const WelcomeTo = () => {

    return(

            <main className='aboutUs_micro_container welcome_container'>
                {/* <div className='aboutUs_card'> */}
                    <div className='welcome aboutUs aboutUs_retreat'>
                        <h2 className='greeting'>Welcome to Two(UAH)</h2>
                    </div>
                    <div className="welcomeImg aboutUsImg aboutUs_retreat">

                        <div className='img_welcome img_size_aboutUs'></div>

                    </div>

                    {/* <div className='border_bottom_box-shedow'></div> */}

                {/* </div> */}
            </main>


    )
}