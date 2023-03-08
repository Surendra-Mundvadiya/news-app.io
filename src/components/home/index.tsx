import React, { useEffect, useMemo, lazy } from "react";
import { connect, useDispatch } from "react-redux";
import constants from "../../constants";
import Loader from "../../utils/loader/loader";
import styles from "./home.module.css";
const NewsCard = lazy(() => import("../../utils/card/card"));
interface HomeProps {
    news: any;
}
const Home: React.FC<HomeProps> = (props) => {
    const { news } = props;
    const dispatch = useDispatch();

    const query: String = useMemo(() => {
        // ?per_page=20&context=embed
        return "?per_page=20&context=embed&limit=20&offset=0";
    }, []);

    useEffect(() => {
        dispatch({
            type: constants("news").sagas.getNewsPost,
            payload: { query },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return (
        <div className={styles.main}>
            {news.loading ? (
                <Loader />
            ) : (
                news.posts.map((el: any) => {
                    return <NewsCard cardDetails={el} />;
                })
            )}
        </div>
    );
};

const mapStateToProps = (state: any) => ({ news: state.news });

export default connect(mapStateToProps)(Home);
