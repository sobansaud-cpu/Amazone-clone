
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import dynamic from "next/dynamic";

interface AddressModalProps {
    open: boolean;
    onClose: () => void;
}

const SelectAddress = dynamic(() => import("./SelectAddress"), {
    ssr: false,
});

export default function AddressModal({ open, onClose }: AddressModalProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth={true}
            maxWidth={'md'}
        >
            <DialogTitle>Choose your location</DialogTitle>
            {open && <SelectAddress />}
        </Dialog>
    );
}
