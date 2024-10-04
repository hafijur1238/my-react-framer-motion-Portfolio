import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <motion.div className="services">
            <motion.div className="textContainer">
                <p>I Focus on helping your brand grow <br /> and move forward</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer">
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <b>Unique</b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <b>For Your</b> Business.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer">
                <div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, deleniti ea! Atque quam eaque soluta officia molestiae accusamus excepturi fugit veritatis porro, consectetur dolorum debitis iste. Ipsam nostrum laudantium quod.</p>
                    <button>GO</button>
                </div>
                <div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, deleniti ea! Atque quam eaque soluta officia molestiae accusamus excepturi fugit veritatis porro, consectetur dolorum debitis iste. Ipsam nostrum laudantium quod.</p>
                    <button>GO</button>
                </div>
                <div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, deleniti ea! Atque quam eaque soluta officia molestiae accusamus excepturi fugit veritatis porro, consectetur dolorum debitis iste. Ipsam nostrum laudantium quod.</p>
                    <button>GO</button>
                </div>
                <div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, deleniti ea! Atque quam eaque soluta officia molestiae accusamus excepturi fugit veritatis porro, consectetur dolorum debitis iste. Ipsam nostrum laudantium quod.</p>
                    <button>GO</button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Services