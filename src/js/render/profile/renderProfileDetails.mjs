import { getProfile } from "../../api/profile/getProfile.mjs";
import * as templates from "../../templates/profile/index.mjs";
import * as render from "./index.mjs";

/**
 * Displaying the profile details on the page using API call
 */
export async function renderProfile() {
  const profileContainer = document.querySelector("#profileDetailContainer");
  const profile = await getProfile();

  console.log(profile);
  if (profile) {
    if (profileContainer) {
      profileContainer.innerHTML = templates.profileTemplate(profile);
    }

    render.renderFollowers();
    render.renderFollowing();
    render.renderProfilePosts();
  }
}
