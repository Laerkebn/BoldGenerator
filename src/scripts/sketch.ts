import type P5 from "p5";
import { controls } from "./stores";

/** Sets up the sketch */
const setup = async (p5: typeof P5.prototype): Promise<void> => {
	const { width, height } = controls;

	p5.createCanvas(width, height);
};

/** Draws the sketch to the canvas */
const draw = (p5: typeof P5.prototype): void => {
	const { currentFrame, circleRadius, circleSpeed, circleMovement } = controls;

	p5.background("#D1B092");

	p5.noStroke();

	const centerX = p5.width * 0.5;
	const centerY = p5.height * 0.5;

	for (let i = 0; i < 100; i += 1) {
		const randomSpeed = p5.random(circleSpeed - 0.001, circleSpeed + 0.001);
		const x = circleMovement * p5.sin(currentFrame * randomSpeed) + p5.random(-centerX, centerX);
		const y = circleMovement * p5.cos(currentFrame * randomSpeed) + p5.random(-centerY, centerY);

		const colors = [
  [82, 0, 0],  // rødlig
  [112, 0, 0],  // grønlig
  [140, 0, 0],  // blålig
  [166, 0, 0],   // gul/orange
  [199, 0, 0]   // lilla
];

let c = p5.random(colors);
p5.fill(c[0], c[1], c[2]);

		p5.rect(centerX + x, centerY + y, circleRadius);
	}
};

export { draw, setup };
