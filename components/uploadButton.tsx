'use client'
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation';

const UploadButton = () => {

    const router = useRouter();
    return <>
    <CldUploadButton 
    onUpload={() => {
        setTimeout(() => {
            router.refresh();
        }, 1000)
    }}
    uploadPreset="u5cfnoki" 
    className="pointer z-10 mt-4 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"/>
    </>
}

export default UploadButton;