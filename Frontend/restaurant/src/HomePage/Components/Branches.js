import React from "react";
import LandingTitle from "./LandingTiltle";
import BrancheItem from "./BranchItems";
export default function Branches() {

    return (
        <div className="Branches">
            <LandingTitle
                title="Some Top restaurant for dining in or Take away!"
                p1="Our restaurant is very good"
                p2="Our Food is very high quality"
                p3="Delivery any where in egypt"
            />
            <div className="container">
                <BrancheItem
                    name="Moharram Bek"
                    disc="This is our first branch that we start all of this from"
                    loc="Alex"
                    one="true"
                />
                <BrancheItem
                    name="Sheraton"
                    disc="The second and not the last branch, near you in cairo"
                    loc="cairo"
                />
            </div>

        </div>
    );
}