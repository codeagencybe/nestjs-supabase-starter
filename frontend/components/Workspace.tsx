'use client';

export default function Workspace() {
    return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
        <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
            <p>FT</p>
        </div>
        <div className="grow">
            <p className="text-[16px] font-bold">Code Agency</p>
            <p className="text-[12px] font-neutral-500">info@codeagency.be</p>            
        </div>
    </div>
    );
}