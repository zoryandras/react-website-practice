import React from 'react'

function Footer() {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/signin">Funsies</FooterLink>
                            <FooterLink to="/signin">Work</FooterLink>
                            <FooterLink to="/signin">Test</FooterLink>
                            <FooterLink to="/signin">Inventory</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer