import "./myCss.css"
import MyHead from "./MyHeaderOne";
import styles from "./myCss.module.css";
function Form(props) {
 const titreRouge = {fontSize:"50px", color: "red"}
 const myClass = props.head ? "blue" :"red" ;
  return (
    <div>
      <h1 className={styles.green}>Commentaire 1</h1>
      <MyHead />
      <h1 style={titreRouge}>Mon titre</h1>
      <p className={`${myClass} bigFont`}>Je suis rouge ou bleu</p>
       <p className="red"> ceci est un paragraphe  </p>
      <button className="btn btn-danger">Valider</button>
    </div>
  );
}

export default Form;
