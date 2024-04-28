import { Container } from "react-bootstrap"
import style from "./style.module.css"
import { Header, Footer } from "../../components/common"
import { Outlet } from "react-router-dom"  // it is responsible for rendering the Component that call inside main layout

const { container, wrapper } = style
const MainLayout = () => {
    return (
        <Container className={container}>
            <Header />
            {/* the content that will be rendered will be inside wrapper */}
            <div className={wrapper}>
            <Outlet />
            </div>
            <Footer />
        </Container>
    )
}

export default MainLayout