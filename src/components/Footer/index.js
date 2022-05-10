import React from 'react'
import {FooterContainer, FooterWrap, SiteCopy} from './FooterElements'

function Footer() {
  return (
    <FooterContainer>
        <FooterWrap>
            <SiteCopy>varga andras © {new Date().getFullYear()}</SiteCopy>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer