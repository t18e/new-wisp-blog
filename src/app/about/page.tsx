import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

I'm currently...

- ...studying Politics @ UCL with a focus on innovation policy, political representation, and African political economy. 
- ...reading a bit more fiction at the moment and [writing](t18e.com/blog) about various topics on my blog.
- ...interested in the following concepts:
  - Sociolinguistics: The changing nature of language in digital spaces.
  - Blockchain identity verificaction: The potential existence of an omnichain. 
  - Digital dualism: The growing overlap between the online & offline selves.


I enjoy ideating, prototyping or building for underserved markets. Here are some things I've worked on:

- Almanac: AMA forum for college alumni
- Brade: Automated accounting & tax for salons
- Colony: Tenant-first property search
- Fanny: Multitask agents for OnlyFans creators
- Pubbler: Publishing assistant for Substack
- Ren: Sensor ring for behavioural monitoring
- Staycey: Swipe-and-click hotel booking


You can reach me: [Twitter](x.com/teadjygb), [LinkedIn](linkedin.com/tiwa-adejuyigbe) or [email](mailto:mail@t18e.com).


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
