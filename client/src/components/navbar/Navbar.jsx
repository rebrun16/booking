import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import  s from "./navbar.module.scss"

const Navbar = () => {

  const {user} = useContext(AuthContext)
  return (
    <div className={s.navbar}>
        <div className={s.navContainer}>
            <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
              <span className={s.logo}>Booking.com</span>
            </Link>
            {user ? user.username : (
              <div className={s.navItems}>
              <button className={s.navButton1}>?</button>
                <button className={s.navButtons}>Зарегистрировать свой объект</button>
                <button className={s.navButton}>Зарегистрироваться</button>
                <button className={s.navButton}>Войти в аккаунт</button>
            </div>)}
        </div>
    </div>
  )
}

export default Navbar