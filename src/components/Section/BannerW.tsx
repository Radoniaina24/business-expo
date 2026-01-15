// components/Banner/BannerSlide.tsx

import Image from 'next/image';

export default function BannerSlide() {
  return (
    <div className={``}>
      {/* Image de fond */}
      <Image
        src={
          'https://res.cloudinary.com/dx3xhdaym/image/upload/v1768223810/post-paysage_bvk0rb.jpg'
        }
        alt={'logo'}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}
