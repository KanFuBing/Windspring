import Head from 'next/head'

export default function LayoutHeader({ title }: {
    title: string
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta property='og:title' content={title} />
            <meta property='og:description' content='Where the wind through the window is from' />
            <meta property='og:type' content='website' />
            <meta property='og:image' content='https://firebasestorage.googleapis.com/v0/b/chuang-wai.appspot.com/o/0.35662958857112026.webp?alt=media&token=f7fd3bc6-ec88-42f8-88dd-d560031237e0' />
        </Head>
    )
}
