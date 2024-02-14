//Esse é o componente Banner, que é chamado pelo App.js
import './Banner.css';

export const Banner = () => {
  //JSX
  return (
    <header className="banner"> 
     <img src="/imagens/banner.png" alt="O banner principal do Organo"
     />
    </header>
  );
}

