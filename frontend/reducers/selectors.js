export const getAllPages = ({ entities: { pages } }) => {
  return Object.keys(pages).map((id) => pages(id));
};

export const getAllBlocks = ({ entities: { blocks } }) => {
  return Object.keys(pages).map((id) => pages(id));
};
