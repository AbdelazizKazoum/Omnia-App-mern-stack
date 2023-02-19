import React from 'react'
import MOCK_DATA from '../../data/MOCK_DATA.json';
import { useTable } from 'react-table';
import { COLUMNS } from './Columns';
import { useMemo } from 'react';
import {AiOutlineMore} from 'react-icons/ai';
import { Button, Dropdown } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Table = () => {
    const columns = useMemo( () => COLUMNS ,[] );
    const data = useMemo(() => MOCK_DATA ,[]);

    const tableInstance = useTable({
        columns,
        data,
    })

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance ;

return (
    <div>
        <table class="table" {...getTableProps()} >
            <thead>
                {headerGroups.map((headerGroup) => ( 
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        { headerGroup.headers.map(column =>(
                            <th {...column.getHeaderProps()}> {column.render('Header')} </th>
                        ) )}
                        <th >Action</th>
                    </tr>
                )) }

            </thead>
            <tbody {...getTableBodyProps()} >
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ) 
                            })
                            }
                            <td id={row.cells[0].render('Cell')}>

                                <Dropdown as={ButtonGroup}>
                                <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Delete</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Details</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                                
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Table ;