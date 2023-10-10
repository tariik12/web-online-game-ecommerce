import React from 'react';
import footerClassName from './footerClassName';
import Link from 'next/link';

const Footer = () => {
    const {
        footer,
        container,
        section,
        sectionLink,
        section1,
        section1Heading,
        section1Content,
        section2,
        section2Content,
        section2Heading,
        section2ul,
        section3,
        section3Heading,
        section3Content
    } = footerClassName;
    return (
        <footer>
            <div className={container}>
                <div className={section}>
<div className={section1}>
<h2 className={section1Heading}>LOGO</h2>
<p className={section1Content}>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima itaque laborum.
</p>
</div>
<div className={section2}>
    <h2 className={section2Heading}>About us</h2>
    <ul>
        <Link href="#" className={sectionLink}>
            Careers
        </Link>
        <Link href="#" className={sectionLink}>
            blog
        </Link>
    </ul>
</div>
<div className={section3}>
<h2 className={section3Heading}> Contact us</h2>
<p className={section3Content} > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique laudantium ipsa voluptas temporibus quo fuga ex corrupti neque placeat autem!</p>
</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;