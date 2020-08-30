import React from 'react'

const CharacterGrid = ({characters, isLoading}) => {
    return isLoading ? (<h1>Loading...</h1>) : <section className="cards">
        {characters.map(character => (
            <h1 key={character.char_id}>{character.name}</h1>
        ))}    
     </section>
}

export default CharacterGrid
