import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    )
}
