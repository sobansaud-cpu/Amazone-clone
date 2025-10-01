import { MapPinIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import dynamic from "next/dynamic";

const AddressModal = dynamic(() => import("../SelectAddress/AddressModal"), {
    ssr: false,
});

const DeliveryTo = () => {
    const { data: session } = useSession();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        if (session) {
            setOpen(true);
        } else {
            signIn();
        }
    };
    const handleClose = () => setOpen(false);

    return ( 
        <div>
            <div className="hidden md:inline md:flex items-center link" onClick={handleOpen}>
                <MapPinIcon className="h-5 mt-3" />
                <div className="ml-1">
                    <p className="text-xs text-slate-300">Deliver to</p>
                    <p className="flex font-bold text-sm">Germany</p>
                </div>
            </div>
            {open && session && <AddressModal open={open} onClose={handleClose} />}
        </div>
     );
}
 
export default DeliveryTo;
