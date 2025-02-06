import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `

## Some things about me:
* Politics at UCL with a focus on innovation policy, political theory and international political economy (IPE). 
* Currently interested in the implications of digital monism on relationships, consumption psychologies and political ideologies.
* Working on reading way more fiction with the help of [the best recommendation engine](https://en.app/).

## Some things I've worked on:
I enjoy ideating & building for underserved markets, and I've been lucky to work on a few interesting ventures](https://t18e.com/blog/idea-ball) during my time at UCL. Here are a few of my favourites:

* Brade: a plug-and-play accounting tool for salons and other beauty services. We built Brade to make reconciling multi-channel payments, forecasting finances and filing taxes 10x cheaper and 100x easier.
* Pubbler: a writing assistant specifically for Substack writers built on Claude Sonnet to provide tailored writing feedback. We , but it didn't feel right. 
* REN: a wearable ring for individuals struggling with addictions to discreetly seek help via touch sensor & BLE. REN was designed based on Prochaska and DiClemente’s transtheoretical model of behavioral change.
* Soundtrack: a 'song a day' social media platform based on the tried-and-tested streak model by BeReal and Snapchat. I advised on Soundtrack's product and on-campus marketing strategies.
* Banga: a WhatsApp booking agent for Africa's restaurants. During testing, Banga automated the entire process via WhatsApp, from booking to email confirmations, cutting booking time by 80%.
* Almanac: an AMA, Reddit-style forum for student-alumni networking and mentorship. I built this specifically for my alma mater, but it unfortunately didn't materialise. 

It's uncertain why some of these didn't succeed as expected. In some cases, it was simply a matter of [inertia](https://t18e.com/blog/inertia). In other instances, it's quite possible we 'overniched' and were just 1-2 pivots away from getting it right. 

## Cue:
* Politics at UCL with a focus on innovation policy, political theory and international political economy (IPE). 
* Currently interested in the implications of digital monism on relationships, consumption psychologies and political ideologies.
* Working on reading way more fiction with the help of [the best recommendation engine](https://en.app/).

In the meantime, you can reach me via [email](mailto:mail@t18e.com) or [LinkedIn](https://linkedin.com/in/tiwa-adejuyigbe) with any questions.


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
