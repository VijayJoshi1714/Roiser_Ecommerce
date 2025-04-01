import Header from '../../ui/Header.jsx'
import Footer from '../../ui/Footer.jsx'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout