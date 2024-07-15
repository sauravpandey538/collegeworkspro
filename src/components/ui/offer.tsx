'use client'
import React, { useState, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import { MyAnimatedBtn } from "@/utils/myBtn";
import { DescriptionTitle } from "@/utils/descriptionTitle";
import { Description } from "@/utils/description";
import Cookies from "js-cookie";

function Offer() {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const alertShown = Cookies.get('alertShown');
        if (!alertShown) {
            setShowAlert(true);
            Cookies.set('alertShown', 'true', { expires: 1 });
        }
    }, []);
    return (
        <>
            {showAlert && (
                <div className="fixed flex flex-col gap-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white z-50 p-6 rounded-lg shadow-lg max-w-screen-sm w-full">
                    <div
                        onClick={() => setShowAlert(false)}
                        className="flex flex-row-reverse"><ImCancelCircle /></div>
                    <DescriptionTitle>New Limited Offer!</DescriptionTitle>

                    <Description>We are offering PTSA for just Nrs 249. Grab it soon !!</Description>
                    <div className="flex justify-end items-center">
                        <MyAnimatedBtn
                            onClick={() => setShowAlert(false)}


                        >
                            Close
                        </MyAnimatedBtn>
                    </div>

                </div>
            )}

        </>
    );
}

export default Offer;
