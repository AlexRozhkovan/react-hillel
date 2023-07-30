import { memo } from "react";

const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

const LanguageTabs = memo(({ selectedLanguage, setSearchParams, loading }) => {
  const setStyles = (loading) => {
    return loading
      ? { cursor: "default", userSelect: "none" }
      : { cursor: "pointer", userSelect: "auto" };
  };

  return (
    <ul className="languages">
      {languages.map((language, index) => (
        <li
          key={index}
          style={{
            color: selectedLanguage === language ? "#d0021b" : "#000000",
            ...setStyles(loading),
          }}
          onClick={() => {
            if (!loading) {
              let params = `lang=${language}`;
              setSearchParams(params);
            }
          }}
        >
          {language}
        </li>
      ))}
    </ul>
  );
});

export default LanguageTabs;
