import VideoPlayer from "@/components/VideoPlayer";
import HomeImagesForm from "./HomeImagesForm";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <section className="flex flex-col gap-10">
      <VideoPlayer videoSrc="/videos/bodyBookerMain.mp4" />
      <HomeImagesForm />
      <Footer />
    </section>
  );
}
