import { motion } from "framer-motion"
import {PLANS_CONTENT} from "../constants"
const PricingPlans = () => {
    const childVariants={
        hidden:{opacity:0,y:20},
        visible:(i)=>({
            opacity:1,
            y:0,
            transition:{
                delay:1 * 0.2,
                duration:0.6,
                ease:"easeOut",
            }
        })
    }
  return (
    <section id="pricing">
        <div className="max-w-7xl mx-auto px-4 mt-20">
            <motion.div initial={{opacity:0,y:-20}} 
            animate={{opacity:1,y:0}}
            transition={{duration:0.6, ease:"easeInOut"}} className="text-center mb-12 border-t border-neutral-800">
                <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter
                bg bg-gradient-to-t from-neutral-50 via-neutral-300
                 to-neutral-600 bg-clip-text text-transparent">
                    {PLANS_CONTENT.sectionTitle}
                 </h2>
                 <p className="mt-4 text-white">{PLANS_CONTENT.sectionDescription}</p>
            </motion.div>
        </div>
    </section>
  )
}

export default PricingPlans