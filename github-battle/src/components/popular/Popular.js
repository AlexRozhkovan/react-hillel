import { useEffect, useState } from "react";
import { fetchPopularRepos } from "../../utils/github-api";
import PopularList from "./PopularList";
import LanguageTabs from "./LanguageTabs";
import Loader from "../Loader";
import { Link, useSearchParams } from "react-router-dom";

const Popular = () => {
  const [searchParams, setSearchParams] = useSearchParams("lang=All");
  const selectedLanguage = searchParams.get("lang");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchPopularRepos(selectedLanguage)
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [selectedLanguage]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <LanguageTabs
        selectedLanguage={selectedLanguage}
        setSearchParams={setSearchParams}
        loading={loading}
      />
      {!loading ? <PopularList repos={repos} /> : <Loader />}
    </div>
  );
};

export default Popular;
