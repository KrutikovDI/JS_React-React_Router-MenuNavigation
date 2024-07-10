import { NavLink } from "react-router-dom";

export default function Menu() {
  const menuItem = [
    {label: 'Главная', link: '/'},
    {label: 'Дрифт-такси', link: '/drift'},
    {label: 'Time Attack', link: '/timeattack'},
    {label: 'Forza Karting', link: '/forza'}
  ]

  const active = ({isActive}) => isActive ? "menu__item menu__item-active" : "menu__item";

  return (
    <nav className="menu">
      {menuItem.map(({label, link}) => (
          <NavLink key={label} className={active} to={link}>{label}</NavLink>
      ))}
    </nav>
  )
}