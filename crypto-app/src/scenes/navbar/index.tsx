import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"

type Props = {}

const Navbar = (props: Props) => {
const flexBetween = "flex items-center justify-between";

  return <nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-full`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                {/* LEFT SIDE */}
                <img alt="logo" src={Logo} className="scale-50"/>

                {/* RIGHT SIDE */}
                <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <p>Home</p>
                        <p>About</p>
                        <p>Live rates</p>
                        <p>Contact us</p>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  </nav>
}

export default Navbar;