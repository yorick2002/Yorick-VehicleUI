import "../index.css";
import { BoxContent } from "@/components/BoxContent"

export const BoxMain = () => {
    return (
        <div className="flex h-screen items-end justify-end p-6">
            <div className="relative flex w-[22rem] h-4/6 flex-col items-start rounded-3xl bg-white px-7 py-6">
            <BoxContent/>
            </div>
        </div>
    );
};
