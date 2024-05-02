import React, { useMemo, useEffect, useState, useContext } from 'react';
import { useTheme } from '@/components/theme-provider';
import logoDarkPath from "@/assets/img/Logo-gelb-frisst_dark.gif"
import logoLightPath from "@/assets/img/Logo-gelb-frisst.gif"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from 'react-router-dom'
import { mainContext } from '@/context/mainProvider'


const HeaderAddExpense = () => {
    const { theme, setTheme } = useTheme();
    const [systemTheme, setSystemTheme] = useState(null);
    const {user, saldo} = useContext(mainContext)
    const navigate = useNavigate()

    const getFirstName = user?.firstName.charAt(0).toUpperCase()
    const getLastName = user?.lastName.charAt(0).toUpperCase()
    const avatarFallback = getFirstName?.concat(getLastName)

    const navigateSettings = () => {
        navigate('/settings')
    }

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setSystemTheme(darkModeMediaQuery.matches ? "dark" : "light");

        const handleThemeChange = (e) => {
            setTheme(e.matches ? "dark" : "light");
        };

        darkModeMediaQuery.addEventListener("change", handleThemeChange);

        return () => darkModeMediaQuery.removeEventListener("change", handleThemeChange);
    }, [setTheme]);

    const logoPath = useMemo(() => {
        if (theme === "dark" || (theme === null && systemTheme === "dark")) {
            return logoDarkPath;
        } else if (theme === "light" || (theme !== null && systemTheme === "light")) {
            return logoLightPath;
        } else {
            return logoDarkPath
        }
    }, [theme, systemTheme]);

    return (
        <section className='flex justify-between items-center'>
            <div className='px-4 pt-2'>
                <img src={logoPath} alt="" className='w-9 h-9'/>
            </div>
            <div className='flex gap-4 items-center px-4 pt-2'>
                <p className='text-l font-medium'><span>{saldo}</span> $</p>
                <Avatar variant='default' className='cursor-pointer' onClick={navigateSettings}>
                    <AvatarImage id='avatar' src='' />
                    <AvatarFallback>
                        <div className='w-10 h-10 rounded-full bg-grey border-2 flex justify-center items-center font-bold'>{avatarFallback}</div>
                    </AvatarFallback>
                </Avatar>
            </div>
        </section>
    );
};

export default HeaderAddExpense;