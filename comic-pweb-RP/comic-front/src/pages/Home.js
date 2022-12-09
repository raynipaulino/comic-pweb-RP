import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = ({ comics }) => {
  return (
    <body >
    <Row>
      {comics.map((comic) => (
        <Col key={comic.id} xs={3}>
          <Link to={`/comic/${comic.id}`}>
            <img
              class="home-img"
              src={comic.image.small_url}
              alt={comic.name}
              style={{}}
            />
            <p
              style={{
                "text-align": "center",
                "font-size": "13px",
                "font-weight": "bold",
                color: "White",
                "fontFamily": "sans-serif"
              }}
            >
              {comic.volume.name} ({comic.cover_date})
            </p>
          </Link>
        </Col>
        
      ))}
      
    </Row>
    </body>
  );
};
