interface Seo {
    id: string
    metaTitle: string
    metaDescription: string
    metaRobots: any
    canonicalURL: string
    structuredData: any
    openGraph: OpenGraph
    metaImage: Picture
}
interface OpenGraph {
    id: string
    og_title: string
    og_description: string
    og_url: string
    og_type: any
    og_image: Picture
}
