import VideoPlayer from "@/components/VideoPlayer";
import HomeImagesForm from "./HomeImagesForm";
import Footer from "@/components/Footer";
import LinkForm from "./LinkForm";

export default function Page() {
  return (
    <section className="flex flex-col gap-10">
      <VideoPlayer videoSrc="/videos/bodyBookerMain.mp4" />
      <LinkForm />
      <HomeImagesForm />
      <Footer />
    </section>
  );
}
