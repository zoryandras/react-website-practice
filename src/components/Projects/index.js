import React from 'react'
import Icon1 from '../../images/Icon1.jpg'
import Icon2 from '../../images/Icon2.jpg'
import Icon3 from '../../images/Icon3.jpg'

import {ProjectContainer, ProjectH1, ProjectWrapper, ProjectCard, ProjectIcon, ProjectH2, ProjectP} from './ProjectElements'

function Projects() {
  return (
    <>
        <ProjectContainer id="projects">
            <ProjectH1>My Projects</ProjectH1>
            <ProjectWrapper>
                <ProjectCard>
                    <ProjectIcon src={Icon1}/>
                    <ProjectH2>Character Creation</ProjectH2>
                    <ProjectP>Just a fun RPG stuff! :)</ProjectP>
                    <ProjectP>https://github.com/zoryandras/character-creation</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon2}/>
                    <ProjectH2>Profile Editor</ProjectH2>
                    <ProjectP>A bit of express practice</ProjectP>
                    <ProjectP>https://github.com/zoryandras/profile-editor</ProjectP>  
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon3}/>
                    <ProjectH2>Rent-A-Pal</ProjectH2>
                    <ProjectP>When you need a doggo!</ProjectP>
                    <ProjectP>https://github.com/zoryandras/react-project-pub</ProjectP>
                </ProjectCard>
            </ProjectWrapper>
        </ProjectContainer>
    </>
  )
}

export default Projects