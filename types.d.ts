declare module "*.svg";

declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.mdx";

declare module "*.module.css" {
  const value: Record<string, string>;
  export = value;
}
