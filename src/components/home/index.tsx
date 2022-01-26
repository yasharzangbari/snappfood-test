import {memo} from "react";
import {areEqual} from "@web/utils";
import styles from "./styles.module.scss"

type Props = {
    homeData : string
};
const HomeComponent = (props: Props) => {
    return (
        <>
            <h1 className={`test ${styles.heading_back}`}>{props.homeData}</h1>
            <h2>{props.homeData}</h2>
            <h3>{props.homeData}</h3>
            <h4>{props.homeData}</h4>
            <h5>{props.homeData}</h5>
        </>
    );
};

export default memo(HomeComponent,areEqual);