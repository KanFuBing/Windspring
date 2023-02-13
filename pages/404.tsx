import Layout from '@/layout'
import { Typography } from '@mui/material'

export default function Status404() {
    return (
        <Layout title='404'>
            <Typography fontSize={100} color='#ffffe0' sx={{ p: '20px 5%' }}>
                404 NOT FOUND
            </Typography>
        </Layout>
    )
}
