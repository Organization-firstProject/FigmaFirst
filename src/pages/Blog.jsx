
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

const articles = [
  {
    image: "IMAGE (17).png",
    title: "GIR: One Year In",
    category: "CASE STUDY",
  },
  {
    image: "IMAGE (16).png",
    title: "Introducing Onsen",
    category: "NEW ADDITIONS",
  },
  {
    image: "IMAGE (15).png",
    title: "Selling Your Shopify Brand: An Introduction",
    category: "MERGERS & ACQUISITIONS 101",
  },
  {
    image: "IMAGE (14).png",
    title: "5 Reasons We Are Optimistic for 2023",
    category: "MERGERS & ACQUISITIONS 101",
  },
  {
    image: "IMAGE (13).png",
    title: "Why Right Now is a Great Time to Sell Your Brand",
    category: "MERGERS & ACQUISITIONS 101",
  },
  {
    image: "IMAGE (12).png",
    title: "Selling Your Shopify Brand: Week 1",
    category: "MERGERS & ACQUISITIONS 101",
  },
  {
    image: "IMAGE (11).png",
    title: "Pattern 2022 Update",
    category: "THOUGHT LEADERSHIP",
  },
  {
    image: "IMAGE (10).png",
    title: "Introducing Yield",
    category: "NEW ADDITIONS",
  },
  {
    image: "IMAGE (9).png",
    title: "Introducing Poketo",
    category: "NEW ADDITIONS",
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />

      <main className="bg-[#fcf9ef] text-[#633d2d]">

        <div className="max-w-[1110px] mx-auto px-6 md:px-10 pt-16 pb-20">

          <section className="min-h-[440px]">

            <p className="text-[11px] tracking-widest text-[#a38e7c] mb-8">
              BUSINESS FOUNDERS /
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-[62px] font-normal leading-[1.12] tracking-[-2px]">
              For founders on
              <br />
              building, growing, and
              <br />
              selling your brand.
            </h1>

            <p className="mt-10 text-sm md:text-base leading-relaxed text-[#927966]">
              Explore the brands joining Pattern
              <br />
              Brands, the sales process & the
              <br />
              founders behind them. +
            </p>

          </section>

          <section className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-7 gap-y-10">

            {articles.map((article, index) => (
              <BlogCard key={index} {...article} />
            ))}

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}
