import AboutSectionOne from "@/components/About/AboutSectionOne";
import Video from "@/components/Video"
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Homework Muffin exists to help busy students overcome a feeling of chaos in their semester by giving them organizational tools to live balanced lives and come to know God."
      />
      <AboutSectionOne />
      <Video />
    </>
  );
};

export default AboutPage;
