import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoutes} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="skills" onClick={toggle}>
                    Skills
                </SidebarLink>
                <SidebarLink to="whatidid" onClick={toggle}>
                    What I did before!
                </SidebarLink>
                <SidebarLink to="projects" onClick={toggle}>
                    My Projects
                </SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>
                    Contact me!
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoutes to="/signin">
                    Sign In
                </SidebarRoutes>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar