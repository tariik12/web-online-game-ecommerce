import React, { FC } from 'react';
import heroClassName from './heroClassName';
import Link from 'next/link';
import Image from 'next/image';
const HeroSection:  FC<{ShowLink?:boolean}> = (props) => {
    const {ShowLink} = props;

    return (
        <section className={heroClassName.hero}>
           <div className={heroClassName.grid}>
<div className={heroClassName.content}>
    <h1 className={heroClassName.heading}>Gaming</h1>
    <h1 className={heroClassName.ctaText}>
        Unlock Your Gaming <br /> Potential
    </h1>
    <p className={heroClassName.paragraph}>
    Immerse yourself in the heart-pounding world of gaming. From action-packed battles to immersive RPGs, we have got it all. Your next gaming adventure starts here!
    </p>
    {
        ShowLink && <div className='mt-8 sm:mt-10 rounded'>
            <Link href="#recent-games" className={heroClassName.button}>
                Find Games
            </Link>
        </div>
    }
</div>
<div className={heroClassName.imageContainer}>
    <Image src="https://images.unsplash.com/photo-1499551660540-eaf0697882f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="3D Game Development" width="400" height={400}
    style={{objectFit:"contain"}}/>
</div>
           </div>
        </section>
    );
};

export default HeroSection;