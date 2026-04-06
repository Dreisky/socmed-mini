import { motion } from "motion/react";

export default function FadeIn({ children, index = 0 }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }} // start state
                animate={{ opacity: 1, y: 0 }} // end state
                transition={{ duration: 0.4, delay: index * 0.2 }}
            >
                {children}
            </motion.div>
        </>
    );
}
