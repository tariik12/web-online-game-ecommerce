import Link from 'next/link';
import React, { FC } from 'react';
import gameCardClassName from './gameCardClassName';
import Image from 'next/image';
interface GameCardProps {
    gameName:string;
    imageUrl:string;
    slug:string;
    price:number;
}

const GameCard: FC<GameCardProps> = (props) => {
    const {gameName,imageUrl,slug,price}=props
    return (
        <div><Link href={`games/${slug}`} className={gameCardClassName.container}>
            <h3 className={gameCardClassName.price}>{price}</h3>
            <Image className={gameCardClassName.image} alt={gameName} src={imageUrl} width={200} height={200} />
            <div className={gameCardClassName.gameName}>{gameName}</div>
            </Link>
            </div>
    );
};

export default GameCard;