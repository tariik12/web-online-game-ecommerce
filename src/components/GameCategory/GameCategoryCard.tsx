import React, { FC } from 'react';

import gameCategoryCardClassName from './gameCategoryCardClassName';
import Link from 'next/link';
import Image from 'next/image';
interface GameCategoryCArdProps {
    categoryImage:string;
    categoryName:string;
    slug:string;
}

const GameCategoryCard :FC<GameCategoryCArdProps> = (props) => {

    const {categoryImage, categoryName, slug} = props;
    const {image, name, container, arrow} =gameCategoryCardClassName;
    return (
        <div>
           <Link className={container} href={`categories/${slug}`}>
            <Image src={categoryImage} alt={name} width={200} height={200} className={image}/>
           </Link>
           <h3 className={name}>{categoryName}</h3>
           <Image src='' alt='view' width={20} height={20} className={arrow}/>
        </div>
    );
};

export default GameCategoryCard;