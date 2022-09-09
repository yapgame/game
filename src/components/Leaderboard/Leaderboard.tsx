/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import auth from 'Utils/api/gameApi';
import Avatar from '@mui/material/Avatar';
import { styleAvatar } from 'Components/Leaderboard/styles';
import img from '../../images/2.jpg';

import { IRow } from './IRow';

function Leaderboard() {
  const mountedRef = useRef(false);
  const [list, setList] = useState<IRow[]>();

  useEffect(() => {
    mountedRef.current = true;

    auth
      .getLeaderboardByTeam('Sydney', {
        ratingFieldName: 'coins',
        cursor: 0,
        limit: 50,
      })
      .then((res: Response) => {
        setList(res as unknown as IRow[]);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography
        sx={{ margin: 2 }}
        variant="h5"
        gutterBottom
        component="div"
      >
        Leaderboard
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell style={{ width: 30 }} align="center">Avatar</TableCell>
              <TableCell style={{ width: 60 }} align="left">User</TableCell>
              <TableCell style={{ width: 60 }} align="left">Games</TableCell>
              <TableCell align="right">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list?.map((row: IRow, index: number) => (
              <TableRow
                key={index.toString()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell style={{ width: 60 }} component="th" scope="row">{index + 1}</TableCell>
                <TableCell align="center" style={{ width: 30 }}>
                  <Avatar
                    sx={styleAvatar}
                    alt={row?.data.login}
                    src={row?.data.avatar ? row?.data.avatar : img}
                  />
                </TableCell>
                <TableCell align="left">{row?.data.login}</TableCell>
                <TableCell align="left">0</TableCell>
                <TableCell align="right">{row?.data.coins}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Leaderboard;
