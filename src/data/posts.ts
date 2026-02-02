import { offensiveSecurityPosts } from "./offensive-security";
import { cybersecurityProjectPosts } from "./cybersecurity-projects";
import { cybersecurityConceptPosts } from "./cybersecurity-concepts";
import { cloudSecurityPosts } from "./cloud-security";
import { defensiveSecurityPosts } from "./defensive-security";
import { toolPosts } from "./tools";

export const allPosts = [
  ...cybersecurityProjectPosts,
  ...cybersecurityConceptPosts,
  ...cloudSecurityPosts,
  ...offensiveSecurityPosts,
  ...defensiveSecurityPosts,
  ...toolPosts,
];
