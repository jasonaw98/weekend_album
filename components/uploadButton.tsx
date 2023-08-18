'use client'
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation';

export type UploadResult = {
    info: {
      public_id: string;
    };
    event: "success";
  };

const UploadButton = () => {

    const router = useRouter();
    return <>
    <CldUploadButton 
    onQueuesEnd={(result: UploadResult) => {
        setTimeout(() => {
            router.refresh();
        }, 2000)
    }}
    uploadPreset="u5cfnoki" 
    className="pointer z-10 mt-4 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"/>
    </>
}

export default UploadButton;