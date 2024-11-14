import VideoPlayer from "@/components/VideoPlayer";
import HomeCarouselForm from "./HomeCarouselForm";
import HomeImagesForm from "./HomeImagesForm";

export default function Page() {
  return (
    <section className="flex flex-col gap-10">
      <VideoPlayer videoSrc="/videos/bodyBookerMain.mp4" />
      <HomeImagesForm />
    </section>
  );
}
