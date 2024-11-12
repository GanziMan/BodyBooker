import VideoPlayer from "@/components/VideoPlayer";
import HomeCarouselForm from "./HomeCarouselForm";

export default function Page() {
  return (
    <section>
      <VideoPlayer videoSrc="/videos/bodyBookerMain.mp4" />
      <HomeCarouselForm />
    </section>
  );
}
