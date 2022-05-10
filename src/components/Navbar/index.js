import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import { IconContext } from 'react-icons'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
        <IconContext.Provider value={{ color: "#fff"}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Varga András</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} 
                            duration={400} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills"
                            smooth={true} 
                            duration={400} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="whatidid"
                            smooth={true} 
                            duration={400} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >What I did before</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"
                            smooth={true} 
                            duration={400} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Some stuff I made</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true} 
                            duration={400} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Contact me!</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In!</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
  )
}

export default Navbar