import { StatusEffect, StatusEffectDecorator } from "@rbxts/wcs";

@StatusEffectDecorator
export class Stun extends StatusEffect {
	protected Construct() {
		// Set the humanoid data, so when stun gets applied it will not move
		this.SetHumanoidData({ WalkSpeed: [0, "Set"] });
	}
}
