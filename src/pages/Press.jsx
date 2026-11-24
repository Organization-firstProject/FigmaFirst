
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const news = [
  {
    title: "Pattern Brands raises new funding to back independent brands",
    source: "Retail Dive, 2022",
  },
  {
    title: "How Pattern is rethinking brand acquisitions",
    source: "Modern Retail, 2022",
  },
  {
    title: "GIR joins Pattern Brands",
    source: "Press release, 2021",
  },
  {
    title: "Onsen and Pattern announce partnership",
    source: "Press release, 2022",
  },
];

export default function Press() {
  return (
    <>
      <Navbar />

      <main className="bg-[#fcf9ef] text-[#633d2d] min-h-screen">

        <div className="max-w-[1110px] mx-auto px-6 md:px-10 pt-16 pb-28">

          <p className="text-[11px] tracking-widest text-[#a38e7c] mb-8">
            PRESS /
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-[62px] font-normal tracking-[-2px] leading-tight">
            Pattern Brands in the news.
          </h1>

          <p className="text-lg md:text-[23px] leading-relaxed text-[#927966] mt-12 mb-20">
            Coverage, announcements, and brand
            <br />
            assets.
          </p>

          <section>

            {news.map((item, index) => (
              <div
                key={index}
                className="min-h-[77px] border-t border-[#e9e3d5] flex flex-col md:flex-row md:items-center justify-between gap-3 py-5"
              >

                <h3 className="text-sm md:text-[17px] font-medium">
                  {item.title}
                </h3>

                <p className="text-xs md:text-[15px] text-[#a38e7c] whitespace-nowrap">
                  {item.source}
                </p>

              </div>
            ))}

            <div className="border-t border-[#e9e3d5]" />

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}
