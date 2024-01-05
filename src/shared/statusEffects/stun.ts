import { Character, StatusEffect, StatusEffectDecorator } from "@rbxts/wcs";

@StatusEffectDecorator
export class Stun extends StatusEffect<void> {
	protected Construct() {
		// Set the humanoid data, so when stun gets applied it will not move
		this.SetHumanoidData({ WalkSpeed: { Mode: "Set", Value: 0 } });
	}
}
