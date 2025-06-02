import type { ImgHTMLAttributes } from "react";
import styles from "./index.module.css";
import clsx from "clsx";
import { motion } from "motion/react";

declare type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    aspectRatio?: string | undefined;
    onItemClicked?: () => void;
};

export default function PhotoItem({
    aspectRatio,
    className,
    onItemClicked,
    ...props
}: ImageProps) {
    return (
        <motion.div
            className={styles.item}
            style={{ aspectRatio }}
            onClick={onItemClicked}
            initial={{opacity:0, transform: "scale(0.97)"}}
            whileInView={{opacity:1, transform: "scale(1)"}}
            viewport={{once: true, amount: 0.6}}
        >
            <img className={clsx(styles.image, className)} {...props} />
        </motion.div>
    );
}
