import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/28397252/pexels-photo-28397252/free-photo-of-dazzling-star-trails-over-dark-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, eligendi officia? Quisquam explicabo quasi ratione voluptatibus ipsa sit aperiam cum incidunt, ut eveniet facere recusandae vel, ullam maxime quia repellat.",
    },
    {
        id: 2,
        title: "Next.js Blog",
        img: "https://images.pexels.com/photos/28397252/pexels-photo-28397252/free-photo-of-dazzling-star-trails-over-dark-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, eligendi officia? Quisquam explicabo quasi ratione voluptatibus ipsa sit aperiam cum incidunt, ut eveniet facere recusandae vel, ullam maxime quia repellat.",
    },
    {
        id: 3,
        title: "Vanilla Js App",
        img: "https://images.pexels.com/photos/28569420/pexels-photo-28569420/free-photo-of-woman-walking-under-bridge-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, eligendi officia? Quisquam explicabo quasi ratione voluptatibus ipsa sit aperiam cum incidunt, ut eveniet facere recusandae vel, ullam maxime quia repellat.",
    },
    {
        id: 4,
        title: "JavaScript World",
        img: "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, eligendi officia? Quisquam explicabo quasi ratione voluptatibus ipsa sit aperiam cum incidunt, ut eveniet facere recusandae vel, ullam maxime quia repellat.",
    },
];

const Single = ({ item }) => {
    return (
        <section>
            {item.title}
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio;