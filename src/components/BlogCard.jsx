
export default function BlogCard({ image, title, category }) {
  return (
    <article className="group cursor-pointer">

      <div className="overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="text-[15px] font-medium leading-snug text-[#633d2d] mb-2">
        {title}
      </h3>

      <p className="text-[10px] tracking-wider text-[#a18d7b]">
        {category}
      </p>

    </article>
  );
}
