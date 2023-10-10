import GameCard from "@/components/GameCard/GameCard";
import HeroSection from "@/components/HeroSection/HeroSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
<HeroSection/>
<section className={sectionClassName.section}>
  <div className={sectionClassName.trending}>
<h2 className={sectionClassName.trendingTitle}>
  Currently Trending Games
</h2>
  </div>
<div className="flex gap-8 flex-wrap">
{games.map(game =><GameCard key={game.id}
gameName={game.name}
imageUrl={game.image}
slug={game.slug}
price={game.price}/>)}
</div>

</section>
<h3>Featured Game</h3>
<section>
  <div className={sectionClassName.featured}>
    <h2 className={featuredClassName.featuredContent}>
      {featuredGame.name}
    </h2>
    <p className={featuredClassName.gameDetails}>
      {featuredGame.description}
    </p>
    <Link href={`games/${featuredGame.slug}`}>
      <Image 
      src={featuredGame.image}
      alt={featuredGame.name}
      width={500}
      height={500}
      className={featuredClassName.gameImage}
      ></Image>
    </Link>
  </div>
</section>
<section  style={{
  backgroundImage:"url('https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
}}>

</section>
    </main>
  )
}

const sectionClassName={
  section:'',
  trending:'',
  trendingTitle:'',
  trendingButton:'',
  latestButton:'',
  featured:'',
  featuredContent:''

}

const games =[
  {
    id:1,
    price:12,
    name:"Assassin's Creed Valhalla",
    slug:"call-fo-duty",
    image:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id:2,
    price:14,
    name:"Assassin's Creed Valhalla",
    slug:"assassin-creed",
    image:'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
  },
  {
    id:3,
    price:20,
    name:"Assassin's Creed Valhalla",
    slug:"assassin-creed",
    image:'https://images.unsplash.com/photo-1623934199716-dc28818a6ec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
  },
  {
    id:4,
    price:36,
    name:"Assassin's Creed Valhalla",
    slug:"assassin-creed",
    image:'https://images.unsplash.com/photo-1626240130051-68871c71de47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
  },
];

const featuredGame = {
  name:"Eternal Domination",
  description:"immerse yourself in a vast ",
  slug:"cternal-domination",
  image:"https://images.unsplash.com/photo-1522069213448-443a614da9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
}

const featuredClassName ={
  gameName:"font-bold",
  gameDetails:"",
    gameImage:'',
    featuredContent:"",
    featuredDescription:""
}