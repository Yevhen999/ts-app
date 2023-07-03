interface IPage {
  title: string;
  annotation: string;
  pageNumber: number;
}

const pageAnnotation: Pick<IPage, "annotation" | "pageNumber"> = {
  annotation: "Small page",
  pageNumber: 35,
};
