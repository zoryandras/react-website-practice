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
                    <a href="https://github.com/zoryandras/character-creation" target="_blank">
                    <ProjectP>Character Creation @ github</ProjectP></a>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon2}/>
                    <ProjectH2>Profile Editor</ProjectH2>
                    <ProjectP>A bit of express practice</ProjectP>
                    <a href='https://github.com/zoryandras/profile-editor' target="_blank">
                    <ProjectP>Profile Editor @ github</ProjectP></a>  
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon3}/>
                    <ProjectH2>Rent-A-Pal</ProjectH2>
                    <ProjectP>When you need a doggo!</ProjectP>
                    <a href='https://github.com/zoryandras/react-project-pub' target="_blank">
                    <ProjectP>Rent-A-Pal @ github</ProjectP></a>
                </ProjectCard>
            </ProjectWrapper>
        </ProjectContainer>
    </>
  )
}

export default Projects