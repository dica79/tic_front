import React from "react";
import { Container, Row } from "react-bootstrap";
import "./articulos.css";
import DataGrid from "../grid/grid";

const columns = [
    {
        dataField: "_id",
        text: "ID",
        hidden: true,
    },
    {
        dataField: "nombre",
        text: "Nombre",
    },
    {
        dataField: "categoria",
        text: "Categoría",
    },
    {
        dataField: "tipo",
        text: "Tipo",
    },
    {
        dataField: "inventario",
        text: " Inventario",
    },
    {
        dataField: "novedad",
        text: "Novedad",
    },
];

export default class ArticulosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {}

    render() {
        return (
            <Container id="articulo-buscar-container">
                <Row>
                    <h1>Buscar Articulos</h1>
                </Row>
                <Row>
                    <DataGrid url="/articulos" columns={columns} />
                </Row>
            </Container>
        );
    }
}
