import HomeComponent from "../components/home";
import {useAsync} from "@web/hooks";
import {useEffect} from "react";
import i18next from "i18next";

export const Home = () => {
    const myAsyncFun = useAsync<string>();

    useEffect(() => {
        myAsyncFun.run(new Promise<any>((resolve) => {
            setTimeout(() => {
                resolve(i18next.t("welcome") + "asdsadas")
            } , 1000)
        }))
    } , [])

    return (
        <HomeComponent homeData={myAsyncFun.data}/>
    );
};