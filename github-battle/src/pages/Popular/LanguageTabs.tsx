import {CSSProperties, FC, memo, ReactElement, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {getRepos} from '../../redux/popular/popular.thunk';
import {useDispatch} from 'react-redux';
import {Dispatch} from "redux";

interface IProps{
    loading: boolean
}

const languages: string[] = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

const LanguageTabs: FC<IProps> =
    memo(({loading}):ReactElement => {
        const dispatch: Dispatch<any> = useDispatch();
        const [searchParams, setSearchParams] = useSearchParams('lang=All');
        const selectedLanguage: string | null = searchParams.get('lang');

        useEffect(():void => {
            dispatch(getRepos(selectedLanguage));
        }, [selectedLanguage, dispatch]);

        const setStyles = (loading: boolean):CSSProperties => {
            return loading
                ? {cursor: 'default', userSelect: 'none'}
                : {cursor: 'pointer', userSelect: 'auto'};
        };

        return (
            <ul className="languages">
                {languages.map((language:string, index:number) => (
                    <li
                        key={index}
                        style={{
                            color: selectedLanguage === language ? '#d0021b' : '#000000',
                            ...setStyles(loading),
                        }}
                        onClick={():void => {
                            if (!loading) {
                                let params:string = `lang=${language}`;
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
