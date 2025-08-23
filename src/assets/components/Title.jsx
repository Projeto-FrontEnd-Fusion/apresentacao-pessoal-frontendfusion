export const Title = ({ label }) =>{
  return(
    <div className="lg:hidden">
      <h3 className="text-xl font-bold text-lightcyan">{label}</h3>
      <div className="w-18 h-0.5 bg-lightcyan"></div>
    </div>
  );
}