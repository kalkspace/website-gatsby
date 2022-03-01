import { useMemo } from "react";

export const GenerativeStarBackground = (props) => {
  const background = useMemo(() => {
    return generateStars(window.innerWidth, window.innerHeight);
  }, []);
  return (
    <div
      {...props}
      style={{
        background: `url(${background})`,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

function generateStars(width, height) {
  const canvas = document.createElement("canvas");
  const stars = canvas.getContext("2d");
  const incrementCount = 1;
  canvas.width = width;
  canvas.height = height;
  for (let x = 0; x < canvas.width; x = x + incrementCount) {
    for (let y = 0; y < canvas.height; y = y + incrementCount) {
      const columnRND = Math.floor(Math.random() * canvas.width + 1);
      if (columnRND > canvas.width - 1) {
        const drawRND = Math.floor(Math.random() * 100 + 1);

        if (drawRND <= 50) {
					const opacity = Math.random() + 0.5;
          const colornum = Math.floor(Math.random() * 255 + 1);
          stars.fillStyle = `rgba(${colornum},${colornum},${colornum},${opacity})`;
          stars.fillRect(x, y, Math.random() + 1, Math.random() + 1);
          stars.shadowColor = `rgba(${colornum},${colornum},${colornum},${opacity})`;
          stars.shadowOffsetX = Math.random() + 0.1;
          stars.shadowOffsetY = Math.random() + 0.1;
          stars.shadowBlur = Math.random() * 5;
        }
      }
    }
  }
  return canvas.toDataURL("image/png");
}
