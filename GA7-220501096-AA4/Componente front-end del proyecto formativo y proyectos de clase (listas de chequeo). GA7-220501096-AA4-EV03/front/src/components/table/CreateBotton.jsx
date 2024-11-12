import { Link } from "react-router-dom";

let objCss = {
    verticalAlign: "middle",
};

function CreateButton(props) {
    let url = props.path + "/create";
    return (
        <Link to={url}>
            <button  style={objCss} className="btn btn-success ms-5">Crear</button>
        </Link>
    );
}
export default CreateButton;
