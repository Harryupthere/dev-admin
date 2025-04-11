
const importAll = (r) => {
  let images = {};
  r.keys().map((item) => {
    return images[item.replace("./", "")] = r(item);
  });
  return images;
};

export const images = importAll(require.context("../assest/images", false));
export const Icons = importAll(require.context("../assest/images/icons", false));

