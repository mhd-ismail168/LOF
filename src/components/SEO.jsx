import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "LOF Enterprises | Multi-Sector Technology, Logistics & Infrastructure Group",
    description = "LOF Enterprises is a multi-sector conglomerate integrating technology, logistics, and real estate to build scalable infrastructure for the digital age.",
    canonical,
    type = 'website',
    name = "LOF Enterprises",
    image = "/logo_1.png"
}) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel="canonical" href={canonical || window.location.href} />

            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />
            <meta property="og:image" content={image} />
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {/* End Twitter tags */}
        </Helmet>
    );
};

export default SEO;
