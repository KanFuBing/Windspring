import Layout from '@/layout'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const Works = [
  {
    image: '/marbles.png',
    title: 'Marbles',
    description: 'Pop the marbles into the green holes. \nSign in (GitHub / Google) required.',
    url: 'https://marbles.windspring.uk'
  },
  {
    image: '/blog.jpg',
    title: 'Blog',
    description: 'Windspring Blog. (Chinese mainly)',
    url: 'https://blog.windspring.uk'
  },
  {
    image: '/drafter.png',
    title: 'Toot Drafter',
    description: 'A Chrome extension that saves your toot and restores it after reloading. (English)',
    url: 'https://github.com/KanFuBing/TootDrafter'
  },
  {
    image: '/tootba.jpg',
    title: 'トゥート葉 / Tootba',
    description: 'Generate Word Cloud based on your most recent 40 toots. (Japanese)',
    url: 'https://tootba.windspring.uk'
  },
]

export default function Home() {
  return (
    <Layout title='Windspring'>
      <Grid container spacing={5} sx={{
        p: '20px 50px',
        opacity: 0.9
      }}>
        {
          Works.map(({ image, title, description, url }) => (
            <Grid item key={title} xs={12} sm={6} md={4}>
              <Card elevation={10}>
                <CardActionArea target='_blank' href={url}>
                  <CardMedia
                    component='img'
                    image={image}
                    alt={title}
                    height={200}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5'>
                      {title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary' sx={{
                      whiteSpace: 'pre-line'
                    }}>
                      {description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Layout >
  )
}
