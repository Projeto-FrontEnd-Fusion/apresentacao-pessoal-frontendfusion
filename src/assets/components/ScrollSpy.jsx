export const ScrollSpy = ({ href, label, isActive }) =>{
  return(
    <article className="hidden lg:block">
      <section className="flex gap-2 group">
        <div className={`bg-lightcyan w-10 h-0.5 self-center transition-all ${isActive ? "w-18" : "w-10 group-hover:w-18"}`}></div>
        <a href={href} className="text-xl text-lightcyan font-extrabold">{label}</a>
      </section>
    </article>
  );
}