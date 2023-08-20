import {CSSProperties, FC, memo, ReactElement, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {getRepos} from '../../redux/popular/popular.requests';
import {useDispatch} from 'react-redux';
import {AppDispatch} from "../../redux/store";

interface IProps {
    loading: boolean
}

const languages: string[] = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

const LanguageTabs: FC<IProps> =
    memo(({loading}: IProps): ReactElement => {
        const dispatch: AppDispatch = useDispatch();
        const [searchParams, setSearchParams] = useSearchParams('lang=All');
        const selectedLanguage: string | null = searchParams.get('lang');

        useEffect((): void => {
            // @ts-ignore
            dispatch(getRepos(selectedLanguage));
        }, [selectedLanguage, dispatch]);

        const setStyles = (loading: boolean): CSSProperties => {
            return loading
                ? {cursor: 'default', userSelect: 'none'}
                : {cursor: 'pointer', userSelect: 'auto'};
        };

        return (
            <ul className="languages">
                {languages.map((language: string, index: number) => (
                    <li
                        key={index}
                        style={{
                            color: selectedLanguage === language ? '#d0021b' : '#000000',
                            ...setStyles(loading),
                        }}
                        onClick={(): void => {
                            if (!loading) {
                                let params: string = `lang=${language}`;
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
