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
    title: "Você já conhece o + Sorrisos Benefícios",
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
    title: "Vídeo oficial da BMouse para o Grupo Salus",
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
    title: "Vídeos Mês da Ortodontia",
    video:
      "https://player.vimeo.com/video/852738534?h=0898048694&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 8,
    link: "https://www.dropbox.com/sh/gaoyqojsjcfnuhv/AAC99rAA1vl-JH0q9F_14ekLa?dl=0",
  },
  {
    title: "Save The Date - Caminhão de Prêmios",
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
    title: "Pílulas GiOlaser",
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
    title: "Sorridents - Pílulas bichectomia",
    data: "29/07/2023",
    video:
      "https://player.vimeo.com/video/852742894?h=3efb6b4dea&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 2,
    link: "https://www.dropbox.com/sh/h9xg95a7842e2cm/AACmUVr6um7dMGupV2iKWR0La?dl=0",
  },
  {
    title: "Lembrete - Campanha Dependente Custo Zero",
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
    title: "Olhar Certo - Pílulas B2B",
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
    title: "Olhar Certo - Pílulas B2C",
    data: "21/07/2023",
    video:
      "https://player.vimeo.com/video/852745486?h=db6cc406b2&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 5,
    link: "https://www.dropbox.com/sh/w48smhrli6qr3yt/AABtMSDlwh7I6OFsYKbhIBqUa?dl=0",
  },
  {
    title: "O sorriso de quem realiza seus sonhos",
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
    title: "Carla Sarni - Sorridents",
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
    title: "Pílulas Clareamento Dental",
    data: "21/07/2023",
    video:
      "https://player.vimeo.com/video/852763615?h=5a1550a6e1&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 4,
    link: "hthttps://www.dropbox.com/sh/eo91da0fgo6i6au/AABXePkhBwq7Q_goinkMcBx1a?dl=0",
  },
  {
    title: "Dia dos Pais Cléber Sarni",
    video:
      "https://player.vimeo.com/video/857149218?h=953ccceea0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 3,
    link: "https://www.dropbox.com/sh/uehu3i5l13orf7v/AAAhvHfVzHP_qttkXXZK9-16a?dl=0",
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
      "https://player.vimeo.com/video/852763042?h=e974ea1278&badge=0&autopause=0&player_id=0&app_id=58479" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/jq6mflh9wfbsrma/AABVeLl1Cjt5GnFakqfSE-upa?dl=0",
  },
  {
    title: "Hospital Mira - Vídeo Institucional",
    data: "29/07/2023",
    video:
      "https://player.vimeo.com/video/852761310?h=b91cb92fc9&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/jq6mflh9wfbsrma/AABVeLl1Cjt5GnFakqfSE-upa?dl=0",
  },
  {
    title: "Salus - Caminhão de Prêmios",
    data: "29/07/2023",
    video:
      "https://player.vimeo.com/video/852761135?h=8c82c4a2d3&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/jq6mflh9wfbsrma/AABVeLl1Cjt5GnFakqfSE-upa?dl=0",
  },
  {
    title: "Carla Sarni - Pílulas",
    video:
      "https://player.vimeo.com/video/852751342?h=9f5046bedd&autoplay=1&muted=1&loop=1" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 7,
    link: "https://www.dropbox.com/sh/jq6mflh9wfbsrma/AABVeLl1Cjt5GnFakqfSE-upa?dl=0",
  },
  {
    title: "Incentivo ao Engajamento",
    video:
      "https://player.vimeo.com/video/857140870?h=77d7101d2e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/sh/qnpld89daidj6m6/AAAqOTG9S7QbnGTkvmUZ8UOja?dl=0",
  },
  {
    title: "Amo Vacinas B2B - Autismo",
    video:
      "https://player.vimeo.com/video/857143048?h=2f950e5cbb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/scl/fo/1xuddm3b1193kh7kdrf3o/h?rlkey=weysddcnlrkrbscd6noevf2aw&dl=0",
  },


  
  //aquiiiiiii
  {
    title: "Conhecendo a Olhar Certo - Dra. Priscila",
    video:
      "https://player.vimeo.com/video/857143468?h=24cf5104d4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/scl/fo/asxs5qnq1cc7kyisr83c4/h?rlkey=lss7fbcrhbyd77ladkzi37orc&dl=0",
  },
  {
    title: "Expansão empresarial -  Depoimentos",
    video:
      "https://player.vimeo.com/video/857144110?h=d7bb0ea09d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 3,
    link: "https://www.dropbox.com/scl/fo/2sgyuo22pzrmrk7df8c7z/h?rlkey=3qwvk7gwrx86b8khzjw7m2xju&dl=0",
  },
  {
    title: "Sobre a Franquia - Dra. Priscila",
    video:
      "https://player.vimeo.com/video/857144530?h=561561b771&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/scl/fo/jf5c5ko6r62cdhmcv4q2w/h?rlkey=r5y70t3fdz0qygm0jh3yfde9l&dl=0",
  },
  {
    title: "Conteúdo B2B - Dra. Priscila",
    video:
      "https://player.vimeo.com/video/857145369?h=712b4447ee&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 4,
    link: "https://www.dropbox.com/scl/fo/6ry8y02zx4n2e40ybuwmx/h?rlkey=502jcdz2mbc50m8x5zkgvwnuy&dl=0",
  },
  {
    title: "Jogadores SPFC - Cotia",
    video:
      "https://player.vimeo.com/video/857241361?h=a583fb252e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 4,
    link: "https://www.dropbox.com/scl/fo/osu9w95qlmkwm2ic8qsvr/h?rlkey=ciav0iwam45eqrclk9juufs8e&dl=0",
  },
  {
    title: "Campanha de Implantes",
    video:
      "https://player.vimeo.com/video/857146372?h=6a36385c47&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 8,
    link: "https://www.dropbox.com/scl/fo/gc0vj6bss720hi0w5phh1/h?rlkey=n1hp00glcaiogmc15hms4q22t&dl=0",
  },
  {
    title: "Pílulas Dra. GioLaser",
    video:
      "https://player.vimeo.com/video/857146912?h=077480d789&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 5,
    link: "https://www.dropbox.com/scl/fo/900m3khemy8y8qlmzin5m/h?rlkey=064dw1l39rgyyy3y3tbucx5nn&dl=0",
  },
  {
    title: "Depilação a Laser de Alexandrite",
    video:
      "https://player.vimeo.com/video/857147216?h=442c0733b9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 1,
    link: "https://www.dropbox.com/scl/fo/w1eqcal9n38nfh6hprei4/h?rlkey=z6av7ehw2hu1x8rfiy197fkh7&dl=0",
  },
  {
    title: "Transformando Vidas - Gustavo e Vanessa",
    video:
      "https://player.vimeo.com/video/857147685?h=7c2fb9c39e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 2,
    link: "https://www.dropbox.com/scl/fo/pmcl2sakqav1is0gs3huj/h?rlkey=juy9b6noe2tlwdo917azmecyu&dl=0",
  },
  {
    title: "Endomarketing - Avisos News",
    video:
      "https://player.vimeo.com/video/857244563?h=d1dc7392fd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" +
      "&autoplay=1&muted=1&loop=1",
    quantidade: 4,
    link: "https://www.dropbox.com/scl/fo/jnjnhswcuteh5cjw21v06/h?rlkey=xuq06ng3qao7iqgy62yqcg7xu&dl=0",
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
        <SwiperSlide className="gradienta w-screen h-screeen">
          <div className="w-full h-full px-3 py-24  border-rounded transition-all duration-300 flex flex-col items-center justify-center gap-5 text-white bg-black bg-opacity-30">
            <img className="!w-[95%] max-w-[700px] " src={logoBranca} alt="" />
            <div className="flex flex-col items-center gap-3">
              <h1 className="mt-[3%] lg:max-w-[1000px] text-2xl md:text-5xl xl:text-6xl text-gradient font-[900] text-center">
                Relatório Audiovisual Bmouse Productions
              </h1>
              <h2 className="text-lg font-semibold">Total de fotos: 224</h2>
              <h2 className="text-lg font-semibold">Total de vídeos: 156</h2>
              <button className="py-4 px-4 md:py-5 md:px-5 mt-10 rounded-full bg-[#85858560] shadow-2xl text-[#ffffffdb]">
                <a
                  href="https://www.bmouseproductions.com/view/Arquivos/Salus/links.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-lg md:text-xl"
                >
                  Acessar arquivos no Dropbox
                </a>
              </button>
            </div>
            
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
              <div className="w-full p-2 flex flex-col gap-5 lg:gap-2 lg:flex-row items-center justify-center bg-opacity-20 backdrop-blur-md">
                <div className="w-full border-rounded transition-all duration-300 text-black shadow-xl flex flex-col justify-center xl:w-[50vw]">
                  <div className="h-[38vh] md:h-[30vw] lg:h-screen mb-3">
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

                <div className=" w-full h-full xl:p-10 xl:h-screen xl:w-[50vw] flex justify-center lg:bg-[#00000045]">
                  <div className="px-5 py-3  text-center items-center flex flex-col  justify-center gap-3 md:gap-6">
                    <h1 className="text-gradient text-4xl font-MontSerrat font-[900] xl:6xl 2xl:text-7xl">
                      {item.title}
                    </h1>

                    <p className=" text-lg md:text-xl font-bold xl:w-[70%] text-[#ffffff]">
                      Quantidade de vídeos: {item.quantidade}
                    </p>

                    <button className="py-4 px-4 md:py-5 md:px-5 rounded-full bg-[#85858560] shadow-2xl text-[#ffffffdb]">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-lg md:text-xl"
                      >
                        Acessar arquivo no Dropbox
                      </a>
                    </button>
                  </div>
                  
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
