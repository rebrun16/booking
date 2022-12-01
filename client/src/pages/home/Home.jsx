import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"
import s from "./home.module.scss" 

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className={s.homeContainer}>
        <Featured/>
        <h1 className={s.homeTitle}>Поиск по типу размещения</h1>
        <PropertyList/>
        <h1 className={s.homeTitle}>Спланируйте поездку легко и быстро</h1>
        <div className={s.homeButton}>
          <button className={s.homeLove}>Романтика</button>
        </div>
        <h1 className={s.homeDesc}>Выберите вид отдыха и посмотрите лучшие места в Мире</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
