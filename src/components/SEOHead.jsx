import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://budaquecreations.vercel.app';
const SITE_NAME = 'BMMC — Budaque Creations';
const DEFAULT_OG_IMAGE = `${SITE_URL}/BMMC%20PNG.png`;

/**
 * SEOHead — Reusable component for per-route meta tags.
 * Uses react-helmet-async to dynamically update <head>.
 *
 * @param {string} title - Page title (appended with site name via template)
 * @param {string} description - Meta description (150-160 chars ideal)
 * @param {string} canonical - Canonical URL path (e.g. "/" or "/all-projects")
 * @param {string} ogImage - Open Graph image URL
 * @param {string} ogType - Open Graph type (default: "website")
 * @param {Array} jsonLd - Array of JSON-LD objects to inject
 */
const SEOHead = ({
    title,
    description,
    canonical = '/',
    ogImage = DEFAULT_OG_IMAGE,
    ogType = 'website',
    jsonLd = [],
}) => {
    const fullTitle = title
        ? `${title} | ${SITE_NAME}`
        : `BMMC — AI & Web Developer Philippines | Custom Apps, Web3 & AI Systems | Rodriguez, Rizal`;
    const fullCanonical = `${SITE_URL}${canonical}`;

    return (
        <Helmet>
            {/* Primary */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="BMMC — AI-Powered Web Development Studio in Rodriguez, Rizal, Philippines" />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_PH" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content="BMMC — AI-Powered Web Development Studio in Rodriguez, Rizal, Philippines" />
            <meta name="twitter:creator" content="@BMMC_dev" />
            <meta name="twitter:site" content="@BMMC_dev" />

            {/* JSON-LD structured data */}
            {jsonLd.map((schema, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEOHead;
