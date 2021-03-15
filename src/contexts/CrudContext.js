import React, { createContext, useEffect, useState } from "react";
import {fire} from '../firebase';

export const CrudContext = createContext();

export const CrudContextProvider = (props) => {

  //READ
  const fetchData = (setuseState) => {
    fire
      .database()
      .ref("Notes")
      .on("value", (snapshot) => {
        const todos = snapshot.val();
        let Notes = [];
        for (let id in todos) {
          Notes.push({ id, ...todos[id] });
        }
        setuseState(Notes);
      });
  };
  //CREATE
  const sendNoteHandler = async (note) => {
    const form = fire.database().ref("Notes");

    const template = {
      note: note,
    };

    await form.push(template);
    console.log("send to DB");
    template.note = "";
  };

 //CLEAR INNUPT FIELD
 const clearInput = (ref) => {
    ref.current.value = null;
  };

  return (
    <CrudContext.Provider value={[clearInput,sendNoteHandler,fetchData]}>
      {props.children}
    </CrudContext.Provider>
  );
};
