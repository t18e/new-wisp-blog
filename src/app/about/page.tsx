import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

* Studying Politics @ UCL with a focus on innovation policy, political representation, and African political economy. 
* Reading a few papers on blockchain use cases and some books on effective design principles.
* Writing about various concepts on [my blog](https://t18e.com). I'm currently interested in sociolinguistics and digital dualism.

You can reach me: [mail@t18e.com](mailto:mail@t18e.com).


`;

export async function generateMetadata() {
  return {
    title: "About | Tiwa Adejuyigbe",
    description: "Get to know me in <200 words.",
    openGraph: {
      title: "About Me",
      description: "Get to know me in <200 words.",
      images: [
        signOgImageUrl({
          title: "Tiwa Adejuyigbe",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
