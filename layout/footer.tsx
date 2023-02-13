import { Divider, IconButton, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import MastodonIcon from 'mdi-material-ui/Mastodon'

export default function LayoutFooter() {
    return (
        <Stack
            sx={{
                height: 50,
            }}
            justifyContent='center'
            divider={<Divider orientation='vertical' flexItem />}
            direction='row'>
            <IconButton target='_blank' rel='noreferrer' href='https://github.com/kanfubing/windspring/'>
                <GitHubIcon htmlColor='#ffffe0'></GitHubIcon>
            </IconButton>
            <IconButton target='_blank' rel='me' href='https://mstdn.jp/@fuhyou' >
                <MastodonIcon htmlColor='#ffffe0'></MastodonIcon>
            </IconButton>
        </Stack>
    )
}
