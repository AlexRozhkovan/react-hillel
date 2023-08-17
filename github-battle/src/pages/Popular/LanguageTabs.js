import { memo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getRepos } from '../../redux/popular/popular.thunk';
import { useDispatch } from 'react-redux';

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

const LanguageTabs = memo(({ loading }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams('lang=All');
  const selectedLanguage = searchParams.get('lang');

  useEffect(() => {
    dispatch(getRepos(selectedLanguage));
  }, [selectedLanguage, dispatch]);

  const setStyles = (loading) => {
    return loading
      ? { cursor: 'default', userSelect: 'none' }
      : { cursor: 'pointer', userSelect: 'auto' };
  };

  return (
    <ul className="languages">
      {languages.map((language, index) => (
        <li
          key={index}
          style={{
            color: selectedLanguage === language ? '#d0021b' : '#000000',
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
