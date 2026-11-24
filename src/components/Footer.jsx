
export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#064b39] text-[#f7f3e8] px-6 md:px-10 py-16"
    >
      <div className="max-w-[1110px] mx-auto">

        <p className="text-[10px] tracking-[3px] text-[#b5c7ba] mb-7">
          CONTACT
        </p>

        <h2 className="text-lg md:text-xl font-normal leading-relaxed mb-16">
          We're focused on building brands and a better future.
          <br />
          If you'd like to partner with us, we're here to talk.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-[12px] leading-7 text-[#c1d0c7]">

          <div>
            <p>Open Spaces</p>
            <p>GIR</p>
            <p>Letterfolk</p>
            <p>Yield</p>
            <p>Poketo</p>
          </div>

          <div>
            <p>Careers</p>
            <p>Press</p>
          </div>

          <div>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>

          <div>
            <p>222 Park Ave S.</p>
            <p>New York, NY 10003</p>
          </div>

        </div>

        <div className="border-t border-[#376b5a] pt-6 text-[10px] text-[#c1d0c7]">
          © 2022 Pattern Brands
        </div>

      </div>
    </footer>
  );
}
