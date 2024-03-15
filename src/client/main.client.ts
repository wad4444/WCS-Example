import { Players, ReplicatedStorage, UserInputService } from "@rbxts/services";
import { Character, CreateClient } from "@rbxts/wcs";
import { Attack } from "shared/skills/attack";

// start the client handler and register the directories
const Client = CreateClient();
Client.RegisterDirectory(ReplicatedStorage.TS.movesets);
Client.RegisterDirectory(ReplicatedStorage.TS.skills);
Client.RegisterDirectory(ReplicatedStorage.TS.statusEffects);
Client.Start();

// get the replicated character wrap of local player's current character
function getCurrentWCS_Character() {
	const characterModel = Players.LocalPlayer.Character;
	if (!characterModel) return;

	return Character.GetCharacterFromInstance(characterModel);
}

UserInputService.InputBegan.Connect((Input, GameProcessed) => {
	if (GameProcessed) return;
	if (Input.UserInputState !== Enum.UserInputState.Begin) return;

	if (Input.UserInputType === Enum.UserInputType.MouseButton1) {
		// get and start the "attack" when we left click
		const character = getCurrentWCS_Character();
		character?.GetSkillFromConstructor(Attack)?.Start();
	}
});
