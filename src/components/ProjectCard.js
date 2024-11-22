// src/components/ProjectCard.js
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import '../App.css'; // Entfernen Sie diesen Import, wenn er falsch ist

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="proj-imgbx" onClick={handleOpenModal}>
        <img src={imgUrl} alt={`${title} Bild`} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          {Array.isArray(description) ? (
            <ul>
              {description.map((desc, index) => (
                desc && <li key={index}>{desc}</li> // Nur nicht-leere Beschreibungen anzeigen
              ))}
            </ul>
          ) : (
            <span>{description}</span>
          )}
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={imgUrl} alt={`${title} Detail`} className="modal-image" />
          {Array.isArray(description) && (
            <ul className="modal-description">
              {description.map((desc, index) => (
                desc && <li key={index}>{desc}</li> // Nur nicht-leere Beschreibungen anzeigen
              ))}
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Schließen
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// PropTypes für bessere Typüberprüfung
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  imgUrl: PropTypes.string.isRequired,
};
