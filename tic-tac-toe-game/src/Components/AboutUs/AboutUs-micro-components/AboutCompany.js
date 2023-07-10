import './../../../style/AboutUs/AboutUs-micro-components/aboutCompany.css'
import './../../../style/AboutUs/aboutUs_main.css'


export const AboutCompany = () => {

    return(
        <main className='aboutUs_micro_container aboutCompany_container'>
            <hr className='emphasis'/>
                <div className='aboutCompanyImg aboutUs_retreat'>
                    <div className='img_aboutCompany'></div>
                </div>
                <div className="aboutCompany aboutUs_retreat">

                    <h3 className='aboutUs_tittle'>About Company</h3>

                    <p className='aboutUs_text-decoration-right'>At Two(UAH), we are passionate about creating engaging and immersive websites with a special focus on games. Our company was founded by Dmytro Kulesha, a skilled developer with over two years of experience in crafting exceptional websites using React.</p>                    

                </div>
            <hr className='emphasis'/>
        </main>
    )
}