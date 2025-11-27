import type { VoidComponent } from "solid-js";
import { controls } from "../scripts/stores";
import { Folder } from "./folder";
import { RangeInput } from "./inputs/range-input";

/** Component for the sketch controls */
const Sketch: VoidComponent = () => (
	<Folder title="Sketch" open={true}>
		<RangeInput
			label="Radius"
			min={1}
			max={100}
			step={0.1}
			value={controls.circleRadius}
			onChange={(value) => {
				controls.circleRadius = value;
			}}
		/>

		<RangeInput
			label="Speed"
			min={0.000_01}
			max={0.1}
			step={0.000_01}
			value={controls.circleSpeed}
			onChange={(value) => {
				controls.circleSpeed = value;
			}}
		/>

		<RangeInput
			label="Movement"
			min={1}
			max={100}
			step={1}
			value={controls.circleMovement}
			onChange={(value) => {
				controls.circleMovement = value;
			}}
		/>
	</Folder>
);

export { Sketch };
