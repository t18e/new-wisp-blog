import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

I'm currently...
* Studying Politics @ UCL with a focus on innovation policy, political representation, and African political economy. 
* Reading a few papers on blockchain use cases and some books on effective design principles. Also reading a few more
novels. 
* Writing about various concepts on [my blog](https://t18e.com). I'm quite interested in sociolinguistics and digital dualism at the moment.

I enjoy ideating & building for underserved markets. Here are a few of my favourite products I've worked on during my time at UCL:
- Brade: a plug-and-play accounting tool for salons and other beauty & grooming services. Most salons use 3-5 payment channels, which makes tracking and reconciling payments difficult without accounting skills. Many salons either hire help or spend hours managing their finances. Brade made this easier by combining payments from booking systems and card readers, matching them with business bank accounts, and helping with tax filing through the Make Tax Digital scheme. It also provided insights compared to industry standards.
- Ren: a wearable ring for treating addictions. Drug and alcohol addiction is rising, particularly among young people. However, many hesitate to seek help due to stigma. Ren offered a discreet way for individuals to reach out by tapping the ring, using Bluetooth Low Energy (BLE) to send a signal to friends and family. It also tracked progress. The Ren ring was designed based on Prochaska and DiClemente’s transtheoretical model of behavioral change.
- Banga: Many Nigerian service businesses use WhatsApp for manual appointment scheduling. Many Nigerian service businesses rely on WhatsApp for manual appointment scheduling, which reduces staff productivity. Banga automated the entire process, from booking to email confirmations, cutting booking time by 80%. It also enabled customers to easily cancel, reschedule, or leave reviews via automated agents, which not only boosted staff productivity but also enhanced the overall customer experience.

It's uncertain why some of these didn't succeed as expected. In some cases, it was simply a matter of [inertia](https://t18e.com/blog/inertia). In other instances, it's possible we were just 1-2 pivots away from getting it right. 

I'm not working on anything at the moment, but you can reach me via [email](mailto:mail@t18e.com) or [LinkedIm](https://linkedin.com/in/tiwa-adejuyigbe) with any questions.


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
