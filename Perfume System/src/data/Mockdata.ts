export type Mockdata = {
  id: number;
  name: string;
  style: "sang_trong" | "tre_trung" | "quyen_ru" | "nhe_nhang";
  scent: "go" | "hoa" | "ngot" | "citric";
  occasion: "hang_ngay" | "di_lam" | "hen_ho";
};

export const perfumes: Mockdata[] = [
  {
    id: 1,
    name: "Bleu de Chanel",
    style: "sang_trong",
    scent: "go",
    occasion: "di_lam",
  },
  {
    id: 2,
    name: "Dior Sauvage",
    style: "tre_trung",
    scent: "citric",
    occasion: "hang_ngay",
  },
  {
    id: 3,
    name: "YSL Black Opium",
    style: "quyen_ru",
    scent: "ngot",
    occasion: "hen_ho",
  },
  {
    id: 4,
    name: "Chanel Chance Eau Tendre",
    style: "nhe_nhang",
    scent: "hoa",
    occasion: "hang_ngay",
  },
];
