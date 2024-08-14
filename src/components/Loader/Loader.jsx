import ImageComponent from "../ImageComponent/ImageComponent";

export default function Loader({ className }) {

  return (
      <div className={`flex justify-center items-center h-[calc(100vh-10rem)] ${className}`}>
        <ImageComponent
          figClassName="overflow-hidden flex mb-0 shrink-0 relative"
          width={160}
          height={160}
          src="/assets/images/theme-loader.gif"
          objectFit="cover"
        />
      </div>
  );
}
