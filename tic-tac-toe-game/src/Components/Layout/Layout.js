import { Header } from "../Header"
import { Footer } from "../Footer"
import { Outlet } from "react-router-dom"
import './../../style/layout.css'

export const Layout = ({children}) => {

    return(
        <div className="body">
            <Header/>

                <Outlet/>


            <Footer/>
        </div >
    )
}