import graphql from "@/lib/graphql";
import { GET_SEO } from "@/lib/graphql/queries";

export default async function metatagsGenerator(path: string) {
    const { seos } = await graphql<{ seos: { seo: Seo }[] }>(GET_SEO, { path }, undefined)
    const seo = seos?.[0]?.seo;
    if (!seo) return {}
    const og = seo?.openGraph

    return {
        title: seo.metaTitle,
        description: seo.metaDescription,
        robots: seo.metaRobots,
        alternates: {
            canonical: seo?.canonicalURL ?? process.env.NEXT_PUBLIC_BASE_URL ?? "https://nextskill.academy",
            languages: {
                'fa-IR': '/',
            },
        },
        ...(og ? {
            openGraph: {
                title: og.og_title,
                description: og.og_description,
                url: seo.canonicalURL,
                images: [
                    {
                        url: og.og_image?.url
                    },
                ],
                locale: 'fa',
                type: 'website',
            },
        } : {})
    }
}