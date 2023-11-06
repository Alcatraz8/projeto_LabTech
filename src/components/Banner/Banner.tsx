import banner from "../../assets/images/Banner.jpg";

import "./styles.css";

function Banner() {
  return (
    <>
      <div className="bannerContainer">
        <img src={banner}/>
        <div className="text">
          <h3>Bem-vindo à Lab Tech - 
            sua parceira confiável em soluções de próteses inovadoras e de alta qualidade.
            Somos uma empresa líder no fornecimento de próteses avançadas, oferecendo uma
            gama completa de produtos para atender às necessidades variadas de profissionais
            de saúde e seus pacientes. Com anos de experiência e um compromisso inabalável
            com a excelência, nos esforçamos para fornecer soluções personalizadas e eficazes
            que melhoram a qualidade de vida das pessoas.
          </h3>
        </div>
      </div>
    </>
  )
}

export default Banner;