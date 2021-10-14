import React, { useMemo } from 'react'
//rafc to create a function component
//to create table component need to import three things

import { useTable } from 'react-table'
import DATA from './DATA.json'
import { COLUMNS } from './columns'

import './table.css'
//A hook is simply a function, which means we call that function 
//within our component


export const BasicTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => DATA, [])


    const tableInstance = useTable({
        columns,
        data
    })

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow,
    }= tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup)=> (

                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column) =>(
                                <th {...column.getHeaderProps()}> {column.render('Header')} </th>
                            ))
                        }
                    
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                                    })
                                }
                                
                            </tr>

                        ) 
                    })
                }
                
            </tbody>
            
        </table>
    )
}
