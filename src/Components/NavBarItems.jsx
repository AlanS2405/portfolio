import './Styles/NavBarItems.css'

const NavBarItems = ({ handleSidebar }) => {


  return (
    <div className='navbar_items'>
        <ol className='navbar_items_ol'>
            <li>
                <a onClick={handleSidebar} href="#aboutMe">About Me</a>
            </li>
            <li>
                <a onClick={handleSidebar} href="#studies">Studies</a>
            </li>
            <li>
                <a onClick={handleSidebar} href="#works">Works</a>
            </li>
            <li>
                <a onClick={handleSidebar} href="#contact">Contact</a>
            </li>
        </ol>
    </div>
  )
}

export default NavBarItems
