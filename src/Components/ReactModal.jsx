import React from "react";
import Modal from "react-modal";
import {Blocks} from 'react-loader-spinner'
import classes from "./Style/ModalCss.module.scss"

Modal.setAppElement("#root");

export const ReactModal = () =>  {
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    const modalStyle = {
        overlay: {
            backgroundColor:"rgba(0,0,0,0.70)"
        },
        content:{
            width:"700px",
            height: "150px",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "auto",
            marginRight: "auto",            
            backgroundColor: "#e0ffff",
            padding: "2.0rem",
            border: "4px solid #c0c0c0"
        }
    };

    return (
      <div className={classes.Modal}>
        <button className={classes.button}  onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal isOpen={modalIsOpen} style={modalStyle}>
          <div className={classes.content}>
            <Blocks timeout={3000} color="aqua" height={75} width={100} /> 
            <div className={classes.SearchingText}>Searching...(45/100)</div> 
            <button className={classes.button} onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </Modal>
      </div>
    );
  }