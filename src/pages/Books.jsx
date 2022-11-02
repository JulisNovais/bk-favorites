import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next'


const colunas = [{
    dataField: 'id',
    text: 'ID'
}, {
    dataField: 'title',
    text: 'nome do livro'
} , {
    dataField: 'authors',
    text: 'Autor'
} , {
    dataField: 'average_rating',
    text: 'Average Rating'
} , {
    dataField: 'isbn',
    text: 'ISBM'
} , {
    dataField: 'num_pages',
    text: 'Número de páginas'
} , {
    dataField: 'publication_date',
    text: 'Data de publicação'
} , {
    dataField: 'publisher',
    text: 'Publicação' }
];

export default function Books() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks()
    }, [])

    async function getBooks() {
        try {
            const response = await axios({
                method: "get",
                url: "http://localhost:5000/books",
            })
    
            setBooks(response.data.content);
            console.log(response.data.content)
        } catch (error) {
            console.log(error);
        }
       
    }



  return (
    <div>
        <h1>Books</h1>
        <BootstrapTable keyField="id" data={books} columns={colunas} />
    </div>
  )
}
