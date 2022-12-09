import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./Home.css";
// Comic Details Page with character_credits, team_credits, location_credits, and concept_credits


export const Comic = () => {
  const { id } = useParams();
  const [comic, setComic] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/comic/${id}`)
      .then((response) => response.json())
      .then((data) => setComic(data.results));
  }, [id]);

  // initial state of comic is null, so we need to check if comic is null before we render it to the page
  if (!comic) {
    return null;
  }

  return (
    <Row
      style={{
        backgroundColor: "	#434343",
        border: "8px solid black",
        margin: "20px auto",
        borderRadius: "15px",
        boxShadow: "5px 5px 5px 5px #000000",
        color: "White",
        verticalAlign: "middle",
        maxWidth: "2000px",
      }}
    >
      <Col lg={12}>
        <h1
          style={{
            color: "White",
            fontSize: "60px",
            fontWeight: "bold",
            textAlign: "center",
            padding: "10px",
            textShadow: "2px 2px 2px #000000",
          }}
        >
          <>{comic.volume.name}</>
        </h1>
      </Col>
      <Col lg={4}>
        <img
          style={{
            maxWidth: "100%",
            height: "90%",
            borderRadius: "15px",
            boxShadow: "0 0 5px 0 black",
            margin: "20px 100px",
            textAlign: "center",
          }}
          src={comic.image.small_url}
          alt={comic.name}
        />
      </Col>


      
      <Col
        lg={4}
        style={{
          padding: "10px",
          textAlign: "center",
          margin: "30px auto",
          verticalAlign: "middle",
        }}
      >
        
        <h2>Characters</h2>
        {comic.character_credits.map((character) => (
          <p key={character.id}>{character.name}</p>
        ))}
        </Col>
        <Col
        lg={4}
        style={{
          padding: "10px",
          textAlign: "center",
          margin: "30px auto",
          verticalAlign: "middle",
        }}
      >
        <h2>Teams</h2>

        {comic.team_credits.map((team) => (
          <p key={team.id}>{team.name}</p>
        ))}
        <h2>Locations</h2>

        {comic.location_credits.map((location) => (
          <p key={location.id}>{location.name}</p>
        ))}
        <h2>Concepts</h2>

        {comic.concept_credits.map((concept) => (
          <p key={concept.id}>{concept.name}</p>
        ))}
     </Col>
    </Row>
  );
};
