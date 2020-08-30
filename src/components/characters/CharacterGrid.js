import React from "react";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {characters.map((character) => (
        <CharacterItem key={character.char_id} character={character}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
