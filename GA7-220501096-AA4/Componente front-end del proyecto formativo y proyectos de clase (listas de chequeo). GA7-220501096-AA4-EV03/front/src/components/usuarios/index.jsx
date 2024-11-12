import Table from "../../components/table/Table";
import getData from "../../assets/js/getData";
import MainPage from "../../components/table/MainPage";
import CreateButton from "../../components/table/CreateBotton";
import SearchBar from "../../components/table/SearchBar";
import { Link } from "react-router-dom";

let objCss = {
    border: "6px solid red",
};

function UsuariosIndex(props) {
    let datosTabla = getData("url", {}, "get", {});
    //procesar datos
    return (

     
      
        <div>
               <div id="breadcrumbs" className="breadcrumbs">
        <div className="container">
  
          <ol>
            <li><Link to={"/"}>Inicio</Link></li>
            <li>Administración</li>
          </ol>
          <h2>Bienvenido Administrador</h2>
          <p >
                Aqui podrás administrar la información de locutores y usuarios
            </p>
            <img src={require("../../assets/img/logo/user2.png")} alt="" />
        </div>
      </div>
            {/* <h2>Usuarios - Locutores</h2> */}
            
            <MainPage
                data={datosTabla}
                path={"/usuarios"}
                name={"Tabla de Usuarios"}
                columns={["id", "firstName", "email", "username", "password"]}
                columnsAlias={[
                    "ID",
                    "Nombre",
                    "Correo",
                    "Usuario",
                    "Contrasena",
                ]}
                tools={["update", "delete"]}
            />
            {/* <div classNameNameName="d-flex">
                <div classNameName="col-6">
                    <Table />
                </div>
                <div classNameName="col-6">
                    <Table />
                </div>
            </div> */}
        </div>
    );
}

export default UsuariosIndex;
