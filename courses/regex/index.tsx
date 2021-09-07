import Main from "../../layouts/Main";
import ProgramInfo from "../../renderings/ProgramInfo";
import BreadCrumb from "../../shared/Breadcrumb";

const ACCOMPLISHMENTS = [
  "Validate input values and other data",
  "Identify errors in data",
  "Clean data",
  "Format data to suit your purposes",
];

const ENABLING_REPERTOIRES = [
  "Use string methods to search or format string",
  "Use escape character in strings to create new line, tab, or an apostorphe",
];

// const OBJECTIVES = [
//   "Identify valid & invalid regexes",
//   "Count the number of words in a string and account for common misspellings",
//   "Validate and format phone number",
//   "Validate email address",
//   "Get file name from path",
//   "Find palindromes",
// ];

export default function Regex() {
  return (
    <Main heading="Regular Expressions">
      <BreadCrumb
        breadcrumbs={[["Complete Assessment"], ["Complete Course"]]}
        stepIndex={0}
      />
      <section>
        <ProgramInfo
          accomplishments={ACCOMPLISHMENTS}
          enablingRepertoires={ENABLING_REPERTOIRES}
          courseId="regex"
        />
      </section>
    </Main>
  );
}
