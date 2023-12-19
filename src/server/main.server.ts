import { Players, ReplicatedStorage } from "@rbxts/services";
import { Character, CreateServer } from "@rbxts/wcs";
import base from "shared/movesets/base";

// start the server handler and register the directories
const Server = CreateServer();
Server.RegisterDirectory(ReplicatedStorage.TS.movesets);
Server.RegisterDirectory(ReplicatedStorage.TS.skills);
Server.RegisterDirectory(ReplicatedStorage.TS.statusEffects);
Server.Start();

Players.PlayerAdded.Connect((Player) => {
	Player.CharacterAdded.Connect((CharacterModel) => {
		// apply the wrap when character model gets created
		const WCS_Character = new Character(CharacterModel);
		// applies all skills from moveset without affecting the current moveset
		WCS_Character.ApplySkillsFromMoveset(base);

		// destroy it when humanoid dies
		const humanoid = CharacterModel.WaitForChild("Humanoid") as Humanoid;
		humanoid.Died.Once(() => WCS_Character.Destroy());
	});
});
