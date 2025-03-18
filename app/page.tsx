"use client"; // Füge dies am Anfang der Datei hinzu
import {apiFetch} from "@/lib/fetchData";
import { supabase } from "@/lib/SupabaseConnection";
import { useState } from "react";

export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  async function  onClickHandler(){

    const data = await apiFetch("./api/restrictedData")
    if(data.user) setIsLoggedIn(true)
  }

  async function  loginHandler(){
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'lucashoffmann94@gmx.de',
      password: '1234',
    })

  }
  return (
    <>
      <div><button onClick={loginHandler}>Login</button></div>
      <div><button onClick={onClickHandler}>Testt</button></div>
      {isLoggedIn ? <div>IS LOGGED IN</div> : <div>NOT LOGGED IN</div> }
      
    </>
   
  );
}
