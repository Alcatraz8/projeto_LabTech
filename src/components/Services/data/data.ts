export interface Service {
  id: number;
  titulo: string;
  descricao: string;
  image: string; 
}

export const data: Service[] = [
  {
    id: 1,
    titulo: "Próteses Personalizadas",
    descricao: "Desenvolvemos próteses personalizadas para atender às necessidades específicas de cada paciente, garantindo conforto e funcionalidade.",
    image: "../../assets/images/protCustomizada.webp"
  },
  {
    id: 2,
    titulo:"próteses avançadas",
    descricao: "Estamos na vanguarda da tecnologia de próteses, utilizando os materiais mais avançados e técnicas inovadoras para criar produtos de alta qualidade e durabilidade.",
    image: "../../assets/images/proteseUltimaGeracao.jpg"
  },
  {
    id: 3,
    titulo:"suporte ao cliente",
    descricao: "Nosso compromisso vai além da entrega do produto. Estamos aqui para apoiar pacientes e profissionais de saúde em todas as etapas do processo, oferecendo orientação e suporte contínuos.",
    image: "../../assets/images/suporte.jpg"
  },
  {
    id: 4,
    titulo:"assistencia técnica",
    descricao: "Nossa equipe altamente qualificada e experiente está pronta para fornecer assistência técnica abrangente, garantindo que nossos produtos atendam aos mais altos padrões de qualidade e desempenho.",
    image: "../../assets/images/assist_tecnica.jpg"
  },
]