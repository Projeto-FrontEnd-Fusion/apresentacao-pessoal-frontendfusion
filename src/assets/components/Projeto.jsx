export const Projeto = ({ src, alt, title, desc, repo, deploy, techs }) => {
  return (
    <div className="flex flex-col gap-5 p-4 rounded-2xl shadow-shadow shadow-xl">
      <>
        <img src={src} alt={alt} className="rounded-t-xl aspect-[3/2] object-cover" />
      </>
      <h4 className="font-bold text-lightcyan text-lg">{title}</h4>
      <p className="text-lightgray font-light">{desc}</p>

      <div className="flex gap-3">
        {techs.map((tech, index) => (
          <p
            className="text-lightcyan bg-darkblue p-2 rounded-2xl text-sm"
            key={index}
          >{tech}</p>
        ))}
      </div>

      <div className="flex gap-4">
        <a href={repo} target="_blank" className="text-lightcyan">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 
                1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.304 3.495.997.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 
                0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 
                2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
                1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
                5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 
                0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 
                c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>

        <a href={deploy} target="_blank" className="">
          <svg width="30" height="30" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="40" x2="40" y2="10" stroke="lightcyan" stroke-width="3" stroke-linecap="round" />
            <line x1="30" y1="10" x2="40" y2="10" stroke="lightcyan" stroke-width="3" stroke-linecap="round" />
            <line x1="40" y1="10" x2="40" y2="20" stroke="lightcyan" stroke-width="3" stroke-linecap="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}