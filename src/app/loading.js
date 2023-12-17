import LoaderGif from '/public/loader.gif';
import Image from 'next/image';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="m-auto h-[100vh] flex items-center justify-center">
      <Image src={LoaderGif} alt="loader img" />
    </div>
  );
}
