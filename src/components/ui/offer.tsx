'use client'
import React, { useState, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import { MyAnimatedBtn } from "@/utils/myBtn";
import { DescriptionTitle } from "@/utils/descriptionTitle";
import { Description } from "@/utils/description";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";

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
        <AnimatePresence mode="wait">
            {showAlert && (

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}

                    className="fixed inset-0 flex justify-center items-center backdrop-brightness-50 z-50">

                    <motion.div
                        key={'secondary'}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.7, opacity: 0 }}
                        className="fixed flex flex-col gap-4  bg-slate-900 text-white  p-6 rounded-lg shadow-lg mx-2 max-w-screen-sm w-full "
                    >
                        <div
                            onClick={() => setShowAlert(false)}
                            className="flex flex-row-reverse"><ImCancelCircle /></div>
                        <DescriptionTitle>New Limited Offer!</DescriptionTitle>

                        <Description>Secure PTSA for just Nrs<span className=" px-2 font-bold text-white">249</span>! Don't miss out on this limited-time deal!</Description>
                        <div className="flex justify-end items-center">
                            <MyAnimatedBtn
                                onClick={() => setShowAlert(false)}


                            >
                                Close
                            </MyAnimatedBtn>
                        </div>

                    </motion.div>
                </motion.div>
            )
            }

        </AnimatePresence>
    );
}

export default Offer;
