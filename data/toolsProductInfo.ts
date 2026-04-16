import { toolsProductInfo1 } from "./toolsProductInfo1";
import { toolsProductInfo2 } from "./toolsProductInfo2";
import { toolsProductInfo3 } from "./toolsProductInfo3";

// When any file approaches 800KB, create toolsProductInfo4.ts
// and add it to the spread below
export const toolsProductInfoData: { [key: string]: any } = {
  ...toolsProductInfo1,
  ...toolsProductInfo2,
  ...toolsProductInfo3,
};
