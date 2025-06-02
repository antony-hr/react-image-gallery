import PhotoItem from "@/components/PhotoItem";
import styles from "./index.module.css";
import { getShuffledPictures } from "@/lib/constants/pictures";
// import { ArrowUp, ArrowUpRight, X } from "lucide-react";
import { startTransition, useRef, useState } from "react";
import { ArrowUp, ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function GalleryGrid() {
    const pictures = useRef([
        getShuffledPictures(),
        getShuffledPictures(),
        getShuffledPictures(),
    ]);
    const [picture, setPicture] = useState<PictureInfo | null>(null);

    function getAspectRatio(size: [number, number]) {
        const [width, height] = size;

        function mcd(a: number, b: number): number {
            return b === 0 ? a : mcd(b, a % b);
        }

        const divisor = mcd(width, height);
        return `${width / divisor} / ${height / divisor}`;
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function onImageClicked(picture: PictureInfo) {
        startTransition(() => {
            setPicture(picture);
        });
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.gridsWrapper}>
                    <div className={styles.grid}>
                        {pictures.current[0].map((picture) => (
                            <PhotoItem
                                key={picture.title}
                                src={picture.src}
                                aspectRatio={getAspectRatio(picture.size)}
                                onItemClicked={() => onImageClicked(picture)}
                            />
                        ))}
                    </div>
                    <div className={styles.grid}>
                        {pictures.current[1].map((picture) => (
                            <PhotoItem
                                key={picture.title}
                                src={picture.src}
                                aspectRatio={getAspectRatio(picture.size)}
                                onItemClicked={() => onImageClicked(picture)}
                            />
                        ))}
                    </div>
                    <div className={styles.grid}>
                        {pictures.current[2].map((picture) => (
                            <PhotoItem
                                key={picture.title}
                                src={picture.src}
                                aspectRatio={getAspectRatio(picture.size)}
                                onItemClicked={() => onImageClicked(picture)}
                            />
                        ))}
                    </div>
                </div>
                <button className={styles.goUpBtn} onClick={scrollToTop}>
                    <ArrowUp />
                    Go Up
                </button>
            </div>
            <AnimatePresence mode="wait">
                {picture && (
                    <motion.div
                        className={styles.fullscreenInfo}
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                setPicture(null);
                            }
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{duration: 0.2, ease: [0.25, 0.1, 0.25, 1]}}
                    >
                        <motion.article
                            className={styles.pictureWrapper}
                            initial={{ opacity: 0, transform: "scale(0.97)" }}
                            animate={{ opacity: 1, transform: "scale(1)" }}
                            exit={{ opacity: 0, transform: "scale(1.1)" }}
                            transition={{duration: 0.2, ease: [0.25, 0.1, 0.25, 1]}}
                            style={{
                                aspectRatio: getAspectRatio(picture.size),
                            }}
                        >
                            <img
                                className={styles.picture}
                                src={picture.src}
                                alt={`${picture.title} - ${picture.author}`}
                            />
                            <div className={styles.detailsContainer}>
                                <div className={styles.titleWrapper}>
                                    <p className={styles.title}>
                                        {picture.title}
                                    </p>
                                    <button
                                        className={styles.closeBtn}
                                        onClick={() => setPicture(null)}
                                    >
                                        <X />
                                    </button>
                                </div>
                                <p className={styles.author}>
                                    {picture.author}
                                </p>
                                <div className={styles.authorWrapper}>
                                    <a
                                        className={styles.goToProfileBtn}
                                        href={`https://unsplash.com/@${picture.username}`}
                                        target="_blank"
                                    >
                                        <span className={styles.username}>
                                            @{picture.username}
                                        </span>
                                        <span className={styles.seeProfile}>
                                            See profile on Unsplash
                                            <ArrowUpRight
                                                className={styles.icon}
                                            />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
