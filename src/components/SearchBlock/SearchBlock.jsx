import { Box } from "@mui/material";
import style from "./SearchBlock.module.scss"
import { useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SearchBlock({setSearchShow}) {
  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      searchQuery: ''
    }
  })
  const searchRef = useRef();
  const inputRef = useRef(null)
  const navigate = useNavigate();

  useEffect(() => {
    function handleSearchClose(event) {
      if(searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchShow(false)
      }
    }

    document.addEventListener('click', handleSearchClose);

    return() => {
      document.removeEventListener('click', handleSearchClose)
    }

  },[setSearchShow])

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  function onSubmit(data) {
    const searchQuery = data.searchQuery;
    navigate(`/search?searchQuery=${searchQuery}`);
    setSearchShow(false)
    reset();
  }

  return (
    <form className={style.search__form} ref={searchRef} onSubmit={handleSubmit(onSubmit)}>
      <Box className={style.search__formInner}>
        <Controller
          name="searchQuery"
          control={control}
          rules={{required: 'This field is required'}}
          render={({field, fieldState: {error}}) => {
            return (
              <>
                <input className={style.search__formInput} type="text" placeholder="Search for a movie, tv show..." {...field} ref={inputRef} />
                {error && <Box>{error.message}</Box>}
              </>
            )
          }
            
          }
        />
        
        <button type="submit" className={`${style.search__formBtn} btnRed`}>Search</button>
      </Box>
    </form>
  );
}

export default SearchBlock;