import {Helmet} from "react-helmet";
import React from "react";

import "./mainPage.scss";

const MainPage = () => {
    return (
        <>
            <div className="main-background">
                <Helmet>
                    <meta
                        name="description"
                        content="TealMarket"
                    />
                    <title>TealMarket</title>
                </Helmet>
                <div className="container ">

                </div>
            </div>
        </>
    );
}

export default MainPage;