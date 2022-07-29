import { Navbar, Menu, Form } from "../components/index"; 

const Finder = ({ menuOpen, setMenuOpen }) => {
    return (
        <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Form />
        </div>
    )
}

export default Finder