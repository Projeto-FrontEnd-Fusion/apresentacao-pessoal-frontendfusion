export const Habilidade = ({ src, alt, label }) => {
  return(
    <div className="flex flex-col items-center gap-4 p-4 rounded-xl shadow-shadow shadow-xl group lg:p-8">
      <img src={src} alt={alt} className="size-16 group-hover:size-20 transition-all group-active:size-20" />
      <p className="text-lightcyan font-bold group-hover:text-lg group-active:text-lg">{label}</p>
    </div>
  );
}