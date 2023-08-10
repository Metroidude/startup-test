import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Homework Muffin exists to help busy students overcome a feeling of chaos in their semester by giving them organizational tools to live balanced lives and come to know God.
        We believe that there's more to life than school. A lot more. We believe that man was created to glorify God and enjoy Him forever, and part of that is living well-balanced lives. That's why we exist."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
