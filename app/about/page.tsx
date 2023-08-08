import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Homework Muffin exists to help busy students overcome a feeling of chaos in their semester by giving them organizational tools to live balanced lives and come to know God.
        We believe that there's more to life than school. A lot more. We believe that man was created to glorify God and enjoy Him forever, and part of that is living well-balanced lives. That's why we exist.
        
        We believe that God wants a relationship with every human being, but we have each rejected Him. We call that rejection and refusal 'sin'. Because of our sin, we are separated from God. 
        But God loves us so much that He gave His only son, Jesus Christ, that we should be restored to our original design of glorifying and enjoying Him forever.
        Today, if you will accept God's forgiveness, you can be restored to a perfect relationship with Him and life life abundantly. That is our prayer for each student and each person. That's why we exist."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
