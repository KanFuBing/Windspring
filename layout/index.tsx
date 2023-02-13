import { Box, Typography } from '@mui/material'
import { ReactNode } from 'react'
import { use100vh } from 'react-div-100vh'
import LayoutFooter from './footer'
import LayoutHeader from './header'

export default function Layout({ children, title }: {
    children: ReactNode,
    title: string
}) {
    const width = '100%'
    const fullHeight = use100vh()
    const minHeight = fullHeight ? fullHeight - 50 : '100vh'
    return (
        <>
            <LayoutHeader title={title}></LayoutHeader>
            <Box sx={{
                position: 'fixed',
                width,
                height: fullHeight ?? '100vh',
                backgroundImage: 'url(/bg.webp)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <Box sx={{
                    backdropFilter: 'blur(3px)',
                    width,
                    height: fullHeight ?? '100vh',
                    pl: 5,
                    pr: 5,
                    overflowY: 'auto'
                }}>
                    <Box sx={{
                        minHeight
                    }}>
                        <br></br>
                        <Typography variant='h4' color='#ffffe0' fontStyle='italic'>Windspring</Typography>
                        <Typography variant='body2' color='#ffffe0' fontStyle='italic' sx={{ fontSize: 'small' }}>
                            Where the wind through the window is from.
                        </Typography>
                        {children}
                    </Box>
                    <LayoutFooter />
                </Box>
            </Box>
        </>
    )
}
