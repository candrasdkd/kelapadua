import { useEffect, useState } from 'react'
import { getWindowSize, } from "../../tools/helpers";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const Home = () => {
    const navigate = useNavigate();
    const [windowDimensions, setWindowDimensions] = useState(getWindowSize());

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // useEffect(() => {
    //     document.title = 'Mumicu';
    // }, [])

    const menuData = [
        {
            id: 1,
            name: 'ABSENSI DESA',
            path: '/template-absensi-desa',
            icon: "fa-solid fa-cloud-arrow-down",
        },
        {
            id: 2,
            name: 'TOTAL SENSUS',
            path: '/template-total-sensus',
            icon: "fa-solid fa-people-group",
        },
    ]

    const onNavigation = (path: string) => {
        if (windowDimensions.width < 700) {
            setTimeout(() => {
                navigate(path)
            }, 350);
        } else {
            navigate(path)
        }

    }
    return (
        <div className='home-container'>
            <div className="background-animation">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='bg-overlay'>
                <header className='navbar'>
                    <div className='logo'>
                        <div className='title'>
                            <span>MUMICU</span>
                        </div>
                        <div className="loading">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </header>
                <main>
                    <section className='card-container'>
                        {menuData.map(item => {
                            return (
                                <motion.div
                                    className="button-borders" key={item.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}>
                                    <button className="primary-button" onClick={() => onNavigation(item.path)}>
                                        <i className={item.icon}></i>
                                        <span>{item.name}</span>
                                    </button>
                                </motion.div>
                            )
                        })}
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Home