import { useMemo } from "react";

export const GenerativeStarBackground = () => { 
  const background = useMemo(() => { return generateStars(window.innerWidth, window.innerHeight)})
  return <div style={{ background: `url(${background})` }} />
}

function generateStars(width,height) {
	const canvas = document.createElement("canvas");
	const stars = canvas.getContext('2d');
	let x;
	let y;
	let colornum;
	const incrementCount = 1;
	canvas.width = width;
	canvas.height = height;
	for (x = 0; x < canvas.width; x = x + incrementCount) {
		for (y = 0; y < canvas.height; y = y + incrementCount) {

			const columnRND = Math.floor((Math.random() * canvas.width) + 1);
			if (columnRND > canvas.width - 1) {
				
				const drawRND = Math.floor((Math.random() * 100) + 1);
				const opacity = Math.random() + 0.5

				if (drawRND <= 50) {
					colornum = Math.floor((Math.random() * 255) + 1);
					stars.fillStyle = "rgba("+ colornum +","+ colornum +","+ colornum +","+ opacity +")";
					stars.fillRect(x, y, Math.random() + 1, Math.random() + 1);
					stars.shadowColor = "rgba("+ colornum +","+ colornum +","+ colornum +","+ opacity +")";
					stars.shadowOffsetX = Math.random() + 0.1
					stars.shadowOffsetY = Math.random() + 0.1
					stars.shadowBlur = Math.random() * 5
				}
			} 
		}
	}
	return canvas.toDataURL("image/png")
}