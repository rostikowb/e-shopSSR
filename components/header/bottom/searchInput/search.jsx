import React from 'react';
import s from './search.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

export const Search = () => {

        return (
            <form className={s.searchBox} noValidate autoComplete="off">
                <div  className={s.search}>
                    <input className={s.searchInput} name="search" placeholder="я ищу..."
                           type="search"/>
                    <FontAwesomeIcon className={s.searchIcon} icon={faSearch}/>
                    <button className={s.btnSearchStart}>ИСКАТЬ</button>
                </div>

            </form>
        )

};

