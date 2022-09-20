import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next'

export default function Home() {
    const [cidades, setCidades] = useState([])
    async function getBooks() {
        try {
            const response = await axios({
                method: "get",
                url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/CE/municipios",
            })
    
            setCidades(response.data);
            console.log(cidades)
        } catch (error) {
            console.log(error);
        }
       
    }

    getBooks();

    const colunas = [{
        dataField: 'id',
        text: 'ID'
    }, {
        dataField: 'nome',
        text: 'cidade'
    }];

    return (
        <BootstrapTable keyField="id" data={cidades} columns={colunas} />
    )
}

