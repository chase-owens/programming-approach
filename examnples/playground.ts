export const playground = () => {
  const name = "Chase Owens";
  const nameRepeatLastName = "Chase Owens Owens";
  const backwardsName = "Owens, Chase";
  const path = "default/config/data";
  const customPath = "custom/config/data";
  const numbers = "1234";
  const bigNumbers = "6789";

  console.log(name.includes("Chase"));

  console.log(name.match("Chase Owens"));
  console.log(name.match(/Chase Owens/));
  console.log(name.match(/Chase Owens/g));
  console.log("has two matches", nameRepeatLastName.match(/Owens/));
  console.log("has two matches", nameRepeatLastName.match(/Owens/g));
  console.log("No John Doe", name.match("John Doe"));

  console.log("isCustom - path", path.match(/\bcustom/));
  console.log("isCustom - customPath", customPath.match(/\bcustom/));
  console.log("isCustom - customPath .", customPath.match(/\b.ustom/));
  console.log(
    "isCustom - customPath . - has to be '.'",
    customPath.match(/\b\.ustom/)
  );
  console.log("alt startsWith - default", path.startsWith("default"));
  console.log("alt startsWith - efault", path.startsWith("efault", 1));

  console.log("\nMATCH PARTS", " - subgroups");
  console.log(name.match(/Chase|Owens/)); // first match
  console.log(backwardsName.match(/Chase|Owens/g)); // match all instances

  console.log("\nMATCH PARTS", " - subgroups - order matters");
  console.log(name.match(/(Chase) (Owens)/)); // Each group and whole group combined comes back 3 matches
  console.log(name.match(/[e]/));
  console.log(backwardsName.match(/(Chase) (Owens)/)); // () means order matters - this returns null
  console.log(name.match(/(Chase) (Owens)/g)); // works like parenthesis aren't even there - gflag cancels it out??

  console.log("\nMATCH PARTS", " - subgroup");
  console.log(name.match(/(Chase Owens)/)); // why did this return 2 matches??
  console.log(name.match(/(Chase Owens)/g)); // works like parenthesis aren't even there - gflag cancels it out??

  console.log("\nMATCH ALL");
  console.log(nameRepeatLastName.matchAll(/Owens/g));
  // Implicitly converted to regEx - TS throws ERROR - console.log(nameRepeatLastName.matchAll('Owens'));
  /* console.log(nameRepeatLastName.matchAll(/Owens/)); */

  console.log(name.search(/o/));
  console.log(name.search(/o/i));
  console.log(name.search(/owens/i));

  console.log(numbers.match(/[5-9]/));
  console.log(bigNumbers.match(/[5-9]/));
};
