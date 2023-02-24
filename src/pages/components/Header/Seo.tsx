import React, { ReactNode } from 'react';
import Head from 'next/head';

type SeoProps = {
    pageTitle: string
};

const Seo:React.FC<SeoProps> = ({pageTitle}: SeoProps) => {
    
    return (
        <>
        <Head>
        <title>{pageTitle}</title>
      </Head>
        </>
    )
}
export default Seo;