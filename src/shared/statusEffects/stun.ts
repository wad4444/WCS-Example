import { Character, StatusEffect, StatusEffectDecorator } from "@rbxts/wcs";

@StatusEffectDecorator
export class Stun extends StatusEffect {
	constructor(Character: Character) {
		super(Character);
		// Set the humanoid data, so when stun gets applied it will not move
		this.SetHumanoidData("Set", { WalkSpeed: 0 });
	}
}
