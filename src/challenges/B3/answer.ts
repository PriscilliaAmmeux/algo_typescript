/**
 * In this challenge, you must find and attach to each group the group (or groups)
 * with which the current group has the most skills in common. 
 * Attached groups must be sorted by their name (A to Z).
 * You must not change the order of the main list of groups.
 * 
 * @param groups List of groups without closestGroups
 * @returns The same list but with a new closestGroups prop on each
 */

// ↓ uncomment bellow lines and add your response!

/**
 * In this challenge, you must find and attach to each group the group (or groups)
 * with which the current group has the most skills in common. 
 * Attached groups must be sorted by their name (A to Z).
 * You must not change the order of the main list of groups.
 * 
 * @param groups List of groups without closestGroups
 * @returns The same list but with a new closestGroups prop on each
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ groups }: { groups: GroupWithSills[] }): GroupWithSillsAndClosestGroups[] {
    return groups.map((group) => {
      const closestGroups: GroupWithSills[] = [];
      let maxCommonSkills = 0;
      for (const otherGroup of groups) {
        if (otherGroup === group) continue;
        const commonSkills = group.skills.filter((skill) => otherGroup.skills.includes(skill));
        if (commonSkills.length > maxCommonSkills) {
          maxCommonSkills = commonSkills.length;
          closestGroups.length = 0;
          closestGroups.push(otherGroup);
        } else if (commonSkills.length === maxCommonSkills) {
          closestGroups.push(otherGroup);
        }
      }
      closestGroups.sort((a, b) => a.name.localeCompare(b.name));
      return { ...group, closestGroups };
    });
  }


// used interfaces, do not touch
export interface GroupWithSills {
    name: string;
    skills: string[];
}

export interface GroupWithSillsAndClosestGroups extends GroupWithSills {
    closestGroups: GroupWithSills[];
}


// used interfaces, do not touch
export interface GroupWithSills {
    name: string;
    skills: string[];
}

export interface GroupWithSillsAndClosestGroups extends GroupWithSills {
    closestGroups: GroupWithSills[];
}
