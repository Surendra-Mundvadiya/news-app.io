/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { memo } from "react";
import styles from "./card.module.css";

interface NewsCardProps {
    cardDetails: any;
}
const NewsCard: React.FC<NewsCardProps> = (props) => {
    const { cardDetails } = props;
    console.log(styles);
    return (
        <div className={styles["card"]}>
            <img src={cardDetails.jetpack_featured_media_url} alt={`Headline image for ${cardDetails.type}`} className={styles["card-img"]} />
            <div className={styles["card-content"]}>
                <h2>{cardDetails.title.rendered}</h2>
                <p>{cardDetails.subtitle}</p>
                <a href={cardDetails.link} className={styles["read-more"]}>
                    Read More
                </a>
            </div>
        </div>
    );
};

export default memo(NewsCard);
