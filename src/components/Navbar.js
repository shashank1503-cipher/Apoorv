import { useScrollDirection } from '@/hooks'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Navbar.module.css'

const MenuClose = () => {

    return (
        <>
            <button className={styles.menu}
                id={'menu'}
                aria-label="Main Menu">

                <svg width="100" height="100" viewBox="0 0 100 100">
                    <path className={`${styles.line} ${styles.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className={`${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
                    <path className={`${styles.line} ${styles.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>

            </button>
        </>
    )
}


const Navbar = (props) => {

    let { isTransparent, logoHide } = props

    const [open, setOpen] = useState(false)
    const scrollDirection = useScrollDirection('down');
    const [scrolledToTop, setScrolledToTop] = useState(true);

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    };


    useEffect(() => {

        const menu = document.getElementById('menu')
        console.log(open)
        if (open) {
            menu.classList.add(styles.opened);
            menu.setAttribute('aria-expanded', menu.classList.contains('opened'))
        }
        else {
            menu.classList.remove(styles.opened);
        }


    }, [open])


    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {

        if (!open && scrollDirection === 'up' && !scrolledToTop) {
            const nav = document.getElementById('mainCont')
            {
                nav.classList.remove(styles.hide)
            }
        }

        if (!open && scrollDirection === 'down' && !scrolledToTop) {
            const nav = document.getElementById('mainCont')
            {
                nav.classList.add(styles.hide)
            }
        }

        if (isTransparent) {
            if (!scrolledToTop) {
                const nav = document.getElementById('mainCont')
                {
                    nav.classList.remove(styles.transparent)
                }
            }
            else {
                const nav = document.getElementById('mainCont')
                {
                    nav.classList.add(styles.transparent)
                }
            }

        }

        if(logoHide)
            if (!scrolledToTop) 
                document.getElementById('logo').style.opacity=1;
            else 
                document.getElementById('logo').style.opacity=0;
            
        

    }, [open, scrollDirection, scrolledToTop])


    const NavItem = (props) => {
        const newPageLinks = ['Events', 'Team']
        return (
            <div className={styles.navItem} onClick={() => {
                if (props.text === "Sponsor Us") {
                    window.open('https://drive.google.com/file/d/1ALBZIrMHY25nVEEaWlzDjcdKr8BNxYiR/view?usp=sharing', '_blank')
                }
                else if (newPageLinks.includes(props.text))
                    window.location.href = `/${props.text.toLowerCase()}`
                else
                    window.location.href = `/#${props.text.toLowerCase()}`
                setOpen(false)
            }}>
                <div>

                    {props.text}
                </div>
            </div>
        )
    }


    return (
        <div className={`${styles.Mcontainer} ${isTransparent ? styles.transparent : ''}`} id={'mainCont'} >
            <div className={styles.container}>
                <div className={styles.logo} id={'logo'} onClick={(e) => { window.location.href = '/#home'; }}>
                    <img src="/logo.svg" alt="logo" className={styles.logoImg} />
                    <img src="/logoText.svg" alt="logo" className={styles.logoText} />
                </div>

                <div className={styles.menuButton} onClick={() => setOpen(!open)}>
                    <MenuClose />
                </div>

                <div className={`${styles.nav} ${open ? styles.navbar_open : styles.navbar_closed}`}>
                    <NavItem text="Home" />
                    <NavItem text="Sponsors" />
                    <NavItem text="Timeline" />
                    <NavItem text="Speakers" />
                    <NavItem text="Events" />
                    <NavItem text="Team" />
                    <NavItem text="Sponsor Us" />
                </div>


            </div>


        </div>
    )
}

export default Navbar
