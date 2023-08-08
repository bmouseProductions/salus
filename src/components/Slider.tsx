import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";
import { Mousewheel, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

import logoBranca from "/Logo-BMouse.png";

const info = [
  {
    title: "O diferencial da Sorridents",
    data: "20/20/2000",
    video:
      "https://player.vimeo.com/video/852676814?h=2a2003531c&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/uh5a0f8vt8mt12b/AAA0e2wTlgYVGY7-Qnfgbam7a?dl=0",
  },
  {
    title: "Por que investir na Sorridents ?",
    video:
      "https://player.vimeo.com/video/852688297?h=51a65576b1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/g745ofanntt2ifj/AADMW8zx_v8X2fnd2j6iW3f0a?dl=0",
  },
  {
    title: "Você precisa conhecer a Sorridents",
    video:
      "https://player.vimeo.com/video/852686809?h=dcff33e36c&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://player.vimeo.com/video/852738534?h=0898048694&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  },
  {
    title: "Sorrisos benefícios",
    video:
      "https://player.vimeo.com/video/852695733?h=d670d00059&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/u3942r0a8epgknm/AADcbh2ZNKaipbeV4C0WJ_ECa?dl=0",
  },
  {
    title: "Pílulas GiOlaser",
    video:
      "https://player.vimeo.com/video/852697480?h=982fb43c45&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 5,
    link: "https://www.dropbox.com/sh/b2r5r9gxyo4fq56/AACCoVu9MaJXa66Qjs_TuBD5a?dl=0",
  },
  {
    title: "Vídeos New Aligner",
    video:
      "https://player.vimeo.com/video/852698183?h=343b05cefb&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 4,
    link: "https://www.dropbox.com/sh/lfwfij2jk9ei552/AAC2HIzQIcXxEyv8CExEcUIra?dl=0",
  },
  {
    title: "Pílulas B2C Sorridents",
    data: "20/20/2000",
    video:
      "https://player.vimeo.com/video/852739881?h=738f977403&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 4,
    link: "https://www.dropbox.com/sh/rmgx8zko5km9u30/AAAy2HGdxpqYykkkHGKlBKZ4a?dl=0",
  },
  {
    title: "Vídeo oficial BMouse para Salus",
    video:
      "https://player.vimeo.com/video/852737980?h=8c6d8e7c51&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/10hodpxuxsmhivk/AACdeaA8cNkNuqjlf0Rmy8kXa?dl=0",
  },
  {
    title: "Ecossistema Salus",
    video:
      "https://player.vimeo.com/video/852737292?h=66e711a5c2&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/2lfy1dst5r1k30p/AADhIwcrt3aQfcGjdxHO9Bhaa?dl=0",
  },
  {
    title: "Mês da Ortodontia",
    video:
      "https://player.vimeo.com/video/852738534?h=0898048694&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 8,
    link: "https://www.dropbox.com/sh/gaoyqojsjcfnuhv/AAC99rAA1vl-JH0q9F_14ekLa?dl=0",
  },
  {
    title: "Save The Date",
    data: "20/20/2000",
    video:
      "https://player.vimeo.com/video/852739130?h=78648431c9&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/201v6pe4fz2k0pt/AACwLYlD7yifDRHR-iDvChwSa?dl=0",
  },
  {
    title: "Sorriso Contagiante",
    data: "20/20/2000",
    video:
      "https://player.vimeo.com/video/852735050?h=d82e605eb8&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/9f1382bpuug50be/AADEgqiAqN9XqWnbCL_fAalGa?dl=0",
  },
  {
    title: "Troco Sorriso Por Abraço",
    data: "29/07/2023",
    video:
      "https://player.vimeo.com/video/852741610?h=459e0211f1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/xjzbowmyxr562c0/AABrM8zJZgxWaaG5kOqQ4IeJa?dl=0",
  },
  {
    title: "Pensamento Coletivo",
    data: "29/07/2023",
    video:
      "https://player.vimeo.com/video/852742894?h=3efb6b4dea&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 2,
    link: "https://www.dropbox.com/sh/h9xg95a7842e2cm/AACmUVr6um7dMGupV2iKWR0La?dl=0",
  },
  {
    title: "GiOlaser",
    data: "29/07/2023",
    video:
      "https://player.vimeo.com/video/852743556?h=b0ddef79d8&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 6,
    link: "https://www.dropbox.com/sh/ntqjzefe2vogy6e/AAAsS_kl_Sae6C3q3uEWeiq-a?dl=0",
  },
  {
    title: "GiOLaser - Depilação a laser é melhor no inverno?",
    data: "29/07/2023",
    video:
      "https://player.vimeo.com/video/852743938?h=1da16d3ff9&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 2,
    link: "https://www.dropbox.com/sh/ntqjzefe2vogy6e/AAAsS_kl_Sae6C3q3uEWeiq-a?dl=0",
  },
  {
    title: "Fernanda Sorriden",
    data: "29/07/2023",
    video:
      "https://player.vimeo.com/video/852745962?h=803e5ab6e6&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 2,
    link: "https://www.dropbox.com/sh/ntqjzefe2vogy6e/AAAsS_kl_Sae6C3q3uEWeiq-a?dl=0",
  },
  {
    title: "Sorridents - Pílulas bichectomia",
    data: "29/07/2023",
    video:
      "https://player.vimeo.com/video/852742894?h=3efb6b4dea&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 2,
    link: "https://www.dropbox.com/sh/h9xg95a7842e2cm/AACmUVr6um7dMGupV2iKWR0La?dl=0",
  },
  {
    title: "Vídeo Fernanda Sorridents",
    data: "29/07/2023",
    video:
      "https://player.vimeo.com/video/852745962?h=803e5ab6e6&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/g8plhkym7w7dtx8/AABERjAiXq2fe4TFXt5usjt1a?dl=0",
  },
  {
    title: "Sorridents - Pílulas Liriana",
    data: "29/07/2023",
    video:
      "https://player.vimeo.com/video/852746548?h=7babf5a9ad&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/p3pw664pjhc12u2/AADC96aFZTJx4l1pk9DeHPfOa?dl=0",
  },
  {
    title: "Pílulas B2B Olhar Certo",
    data: "21/07/2023",
    video:
      "https://player.vimeo.com/video/852742174?h=510ae47726&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 4,
    link: "https://www.dropbox.com/sh/wqw9zdpo6i2b7aw/AADZtMekgitAFMbds1mZwy3Da?dl=0",
  },

  {
    title: "Pílulas Harmonização Orofacial",
    data: "21/07/2023",
    video:
      "https://player.vimeo.com/video/852743274?h=240aadc883&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 3,
    link: "https://www.dropbox.com/sh/ao90xfos7i34n18/AAC7AyUsaQiRQs8ADOYMddgHa?dl=0",
  },
  {
    title: "Pílulas Bichectomia",
    data: "21/07/2023",
    video:
      "https://player.vimeo.com/video/852743988?h=5d3bf620c8&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 4,
    link: "https://www.dropbox.com/sh/jg3mu21uz6m76c7/AABmPZzpg3S2y9B9XrJwxnBKa?dl=0",
  },
  {
    title: "Pílulas Facetas",
    data: "21/07/2023",
    video:
      "https://player.vimeo.com/video/852744563?h=6d41f3ac0c&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 4,
    link: "https://www.dropbox.com/sh/gajyja174df4437/AAAgZNGtaqbR7DHmwE5KBtSga?dl=0",
  },
  {
    title: "Pílulas B2C Olhar Certo",
    data: "21/07/2023",
    video:
      "https://player.vimeo.com/video/852745486?h=db6cc406b2&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 5,
    link: "https://www.dropbox.com/sh/w48smhrli6qr3yt/AABtMSDlwh7I6OFsYKbhIBqUa?dl=0",
  },
  {
    title: "William Cotia",
    data: "21/07/2023",
    video:
      "https://player.vimeo.com/video/852746474?h=bcf38bbbc0&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/zt9s3z9gdvev17n/AACAIPMNQDj2EyEZH_x3A2gva?dl=0",
  },
  {
    title: "Chamada Flagship",
    data: "21/07/2023",
    video:
      "https://player.vimeo.com/video/852748575?h=197691e207&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/scl/fi/7f4hu318mwe7ls6hv49bu/Chamada-1-Oficial-Franqueados-Flagship.mp4?rlkey=u7334h193t8q6mznh010y6491&dl=0",
  },
  {
    title: "Depoimento Rosângela Manfredini",
    data: "21/07/2023",
    video:
      "https://player.vimeo.com/video/852749926?h=708a45a108&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "hthttps://www.dropbox.com/sh/eo91da0fgo6i6au/AABXePkhBwq7Q_goinkMcBx1a?dl=0",
  },
  {
    title: "Carla sobre a Sorridents",
    data: "21/07/2023",
    video:
      "https://player.vimeo.com/video/852758484?h=f3c93e3131&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "hthttps://www.dropbox.com/sh/eo91da0fgo6i6au/AABXePkhBwq7Q_goinkMcBx1a?dl=0",
  },
  {
    title: "Rifa Solidária",
    data: "21/07/2023",
    video:
      "https://player.vimeo.com/video/852760657?h=9c239d6aef&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "hthttps://www.dropbox.com/sh/eo91da0fgo6i6au/AABXePkhBwq7Q_goinkMcBx1a?dl=0",
  },
  {
    title: "Pílulas Preenchimento Gengival",
    data: "21/07/2023",
    video:
      "https://player.vimeo.com/video/852761847?h=9782d8d8f6&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 4,
    link: "hthttps://www.dropbox.com/sh/eo91da0fgo6i6au/AABXePkhBwq7Q_goinkMcBx1a?dl=0",
  },
  {
    title: "Pílulas Lente de Contato",
    data: "21/07/2023",
    video:
      "https://player.vimeo.com/video/852762871?h=82058383aa&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 4,
    link: "hthttps://www.dropbox.com/sh/eo91da0fgo6i6au/AABXePkhBwq7Q_goinkMcBx1a?dl=0",
  },
  {
    title: "Clareamento Dental",
    data: "21/07/2023",
    video:
      "https://player.vimeo.com/video/852763615?h=5a1550a6e1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 4,
    link: "hthttps://www.dropbox.com/sh/eo91da0fgo6i6au/AABXePkhBwq7Q_goinkMcBx1a?dl=0",
  },
  {
    title: "Carla Sarni - Expansão Empresarial",
    data: "29/07/2023",
    video:
      "https://player.vimeo.com/video/852737828?h=a01c9b016c&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 4,
    link: "https://www.dropbox.com/sh/jq6mflh9wfbsrma/AABVeLl1Cjt5GnFakqfSE-upa?dl=0",
  },
  {
    title: "Carla Sarni - Simplifique sua vida",
    data: "29/07/2023",
    video:
      "https://player.vimeo.com/video/852763042?h=e974ea1278&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/jq6mflh9wfbsrma/AABVeLl1Cjt5GnFakqfSE-upa?dl=0",
  },
  {
    title: "Vídeo Institucional Hospital Mira",
    data: "29/07/2023",
    video:
      "https://player.vimeo.com/video/852761310?h=b91cb92fc9&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/jq6mflh9wfbsrma/AABVeLl1Cjt5GnFakqfSE-upa?dl=0",
  },
  {
    title: "Caminhão de prêmios",
    data: "29/07/2023",
    video:
      "https://player.vimeo.com/video/852761135?h=8c82c4a2d3&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/jq6mflh9wfbsrma/AABVeLl1Cjt5GnFakqfSE-upa?dl=0",
  },
  {
    title: "Pack Carla Sarni",
    video:
      "https://player.vimeo.com/video/852751342?h=9f5046bedd&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 7,
    link: "https://www.dropbox.com/sh/jq6mflh9wfbsrma/AABVeLl1Cjt5GnFakqfSE-upa?dl=0",
  },
];

export const Slides = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Função para acionar animações AOS quando um novo slide é exibido
  const handleSlideChange = () => {
    AOS.refresh(); // Atualiza as animações AOS
  };
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        pagination={true}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide className="gradienta">
          <div className="container px-3 py-24 bg-black bg-opacity-30 border-rounded transition-all duration-300 flex flex-col items-center justify-center gap-5 text-white">
            <img className="m-auto " src={logoBranca} alt="" />
            <h1 className="text-6xl text-gradient font-bold text-center">
              Relatório Audiovisual Bmouse Productions
            </h1>
            <h2 className="text-lg font-semibold">Total de fotos: 224</h2>
            <h2 className="text-lg font-semibold">Total de vídeos: 123</h2>
            <button className="m-auto py-5 px-10 rounded-full bg-[#85858560] shadow-2xl text-[#ffffffdb]">
              <a
                href="https://www.bmouseproductions.com/view/Arquivos/Salus/links.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-xl"
              >
                Acessar arquivos no Dropbox
              </a>
            </button>
          </div>
        </SwiperSlide>
        {info.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="gradienta flex flex-col xl:flex-row items-center justify-center"
              style={{
                minHeight: "100vh", // Defina a altura mínima como 100% da altura da visualização
              }}
            >
              <div className="container p-2  flex flex-col gap-10 xl:gap-0 xl:flex-row items-center">
                <div className="w-ful px-3 bg-opacity-20 backdrop-blur-md border-rounded transition-all duration-300 text-black shadow-xl flex flex-col justify-center xl:w-[50vw]">
                  <div className="h-[50vw]  xl:h-screen ">
                    <iframe
                      src={item.video}
                      allow="fullscreen; picture-in-picture"
                      title="Oklahoma Crispy"
                      allowFullScreen
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    ></iframe>
                  </div>
                </div>

                <div className="lg:bg-[#00000045] px-5 container text-center items-center flex flex-col  justify-center gap-6 xl:p-10 xl:h-screen xl:w-[50vw]">
                  <h1 className="text-gradient  text-3xl font-MontSerrat font-bold xl:6xl 2xl:text-7xl">
                    {item.title}
                  </h1>

                  <p className="text-xl font-bold xl:w-[70%] text-[#ffffff]">
                    Quantidade de vídeos: {item.quantidade}
                  </p>

                  <button className="py-5 px-10 rounded-full bg-[#85858560] shadow-2xl text-[#ffffffdb]">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-xl"
                    >
                      Acessar arquivo no Dropbox
                    </a>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
