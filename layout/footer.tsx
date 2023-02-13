import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import MastodonIcon from 'mdi-material-ui/Mastodon'

export default function LayoutFooter() {
    return (
        <Stack
            sx={{ mb: 1 }}
            justifyContent='center'
            divider={<Divider orientation='vertical' flexItem />}
            direction='row'>
            <IconButton target='_blank' rel='noreferrer' href='https://github.com/kanfubing/windspring/'>
                <GitHubIcon htmlColor='#ffffe0'></GitHubIcon>
            </IconButton>
            <IconButton target='_blank' rel='me' href='https://mstdn.jp/@fuhyou' >
                <MastodonIcon htmlColor='#ffffe0'></MastodonIcon>
            </IconButton>
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Typography variant='caption' color='#ffffe0' textAlign='justify'>Dedicated to cultural, informational & web causes.</Typography>
            </Box>
        </Stack>
    )
}
