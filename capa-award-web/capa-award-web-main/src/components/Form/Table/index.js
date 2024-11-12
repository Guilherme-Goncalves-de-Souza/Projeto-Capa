import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EmptyMessage, Load, LoadCenter } from 'ui/styled';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.colors.blue,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

export default function BasicTable({ columns, rows, loading }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
                columns?.map((item, key) => 
                    <StyledTableCell key={key}  align={key === 0 ? "left" : "right" } >{ item.title }</StyledTableCell>
                )
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                {
                    columns?.map((item, key) => 
                        <TableCell key={key} align={ key === 0 ? "left" :  "right" } >
                            { item?.['renderCell'] ? item.renderCell({row}) : row?.[item.ref] }
                        </TableCell>
                    )
                }
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {
        !loading ? <>
          { rows?.length ? null : <EmptyMessage>Nenhum registro encontrado</EmptyMessage> }
        </> : 
          <LoadCenter>
            <Load />
          </LoadCenter> 
      }
    </TableContainer>
  );
}