// https://github.com/briancodex/react-footer-tutorial

import React from 'react'
import Footer from './Footer'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Resources</Footer.Title>
                    <Footer.Link href="#">Terms</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Fees</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Support</Footer.Title>
                    <Footer.Link href="#">Contact</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#">Blog</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}