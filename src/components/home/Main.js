import React from "react";
import { useState, useEffect } from "react"; 
import working from "../../images/working.svg"
import { useSelector } from "react-redux";
import Card from "./Card";
import getGenders from "../../utils/getGenders"
import Gender from "./Gender";
import createFilterObject from "../../utils/createFilterObj";
import checkTrue from "../../utils/checkTrue";
import isObjEmpty from "../../utils/isObjEmpty"
import createPagesObj from "../../utils/pagesObj";
import PageNum from "./PageNum";
import getPage from "../../utils/slidingWindow";

export default function Main(){
  const state = useSelector((state) => state.users);
  const [displayedUsers, setDisplayedUsers] = useState([])
  const [genders, setGenders] = useState([])
  const [filterObject, setFilterObject] = useState({})
  const [ search, setSearch ] = useState("")
  const [pages, setPages] = useState({})
  const [usersPerPage, setUsersPerPage] = useState([])
  const [cleaner, setCleaner] = useState(false)

useEffect(() => {
    if(state.length){
        setGenders(getGenders(state))
        console.log("State updated")
    }
}, [state]);

useEffect(function(){
  if(genders.length){
    setFilterObject(createFilterObject(genders))
    console.log("genders updated")
}}, [genders])

useEffect(()=>{
  if(!isObjEmpty(filterObject)){
    if(checkTrue(filterObject)==="todos"){
      setDisplayedUsers(state)
      console.log("Filter Obj updated")
    }else{
      console.log("Filter Obj updated")
      setDisplayedUsers(function(){
        let array = state.filter((element)=> element.gender === checkTrue(filterObject))
        return array
        })
    }
  }
},[filterObject])

useEffect(()=>{
  if(search.length){
    setCleaner(true)
    setFilterObject(function(oldValue){return Object.assign(...Object.keys(oldValue).map(k => ({ [k]: false })));})
    setUsersPerPage(function(oldValue){
      let str = search.toLocaleLowerCase()
      const results = state.filter((element)=> element.first_name.toLowerCase().includes(str) || 
      element.last_name.toLowerCase().includes(str) || 
      element.username.toLowerCase().includes(str))
    return results
   })
  }else if(cleaner && !search.length){
    handdleClick()
    setCleaner(false)
  }
},[search])

useEffect(()=>{
  if(displayedUsers.length){
    setPages(createPagesObj(displayedUsers.length))
    console.log("Displayed users updated")
  }
}, [displayedUsers])

useEffect(()=>{
  if(!isObjEmpty(pages)){
  setUsersPerPage(function(oldValue){
  let result = getPage(displayedUsers, checkTrue(pages))
  return result})
  console.log("pages updated")}
},[pages])


const searcher = (e) => {
  setSearch(e.target.value)  
}

function handdleClick(){
  setFilterObject(function(oldValue){
      let key = checkTrue(filterObject)
      return (
        {...filterObject, [key]: false, todos: true}
      )
})
}
    return (
        <main>
        <section>
          <div className="content">
            <h1>Buscador de usuarios</h1>
            <p>Busca según nombre, username o filtra según el género del usuario.</p>
          </div>
          <div className="image">
            <img src={working} alt="image"/>
          </div>
        </section>
        <section className="link-input">
          <form className="input-container">
            <input value={search} onChange={searcher} type="text" placeholder="Busca por nombre completo o username..." required/>
            <button type="submit" className="input-btn" onClick={(e) => {e.preventDefault()}}>Buscar</button>
          </form>
        </section>
        <p className="resultados" style={{display: search.length ? 'block' : 'none'}}>Resultados para <span>{search}</span></p>
        <section className="services">
          <div className="service-content">
            <span className={filterObject.todos ? "genero active-gender" : "genero"} onClick={handdleClick}>Todos</span>
            {genders.length && genders.map(function(element){
              return <Gender text={element} key={element} filterObject={filterObject} setFilterObject={setFilterObject}/>
            })}
          </div>
        <main className="grid">
          {usersPerPage.length && usersPerPage.map((element)=>{return <Card element={element} key={element.id} class={"card"}/>})}
        </main>
        <div className="page-num-container">
          {!isObjEmpty(pages) && Object.keys(pages).map((element)=>{return <PageNum num={element} pages={pages} setPages={setPages}/>})}
        </div>
        </section>
        <section className="boost">
          <h2>Buscador de usuarios</h2>
        </section>
      </main>
    )
}