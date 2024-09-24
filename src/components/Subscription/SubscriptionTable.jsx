import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import style from './Subscription.module.scss'

function SubscriptionTable() {
  function createData(name, basic, standard, premium) {
    return { name, basic, standard, premium }
  }
  
  const rows = [
    createData('Price', '$9.99/Month', '$12.99/Month', '$14.99/Month'),
    createData('Content', 'Access to a wide selection of movies and shows, including some new releases.', 'Access to a wider selection of movies and shows, including most new releases and exclusive content', 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing'),
    createData('Devices', 'Watch on one device simultaneously', 'Watch on Two device simultaneously', 'Watch on Four device simultaneously'),
    createData('Free Trail', '7 Days', '7 Days', '7 Days'),
    createData('Cancel Anytime', 'Yes', 'Yes', 'Yes'),
    createData('HDR', 'No', 'Yes', 'Yes'),
    createData('Dolby Atmos', 'No', 'Yes', 'Yes'),
    createData('Ad - Free', 'No', 'Yes', 'Yes'),
    createData('Offline Viewing', 'No', 'Yes, for select titles.', 'Yes, for all titles.'),
    createData('Family Sharing', 'No', 'Yes, up to 5 family members.', 'Yes, up to 6 family members.'),
  ];
  return (
    <TableContainer sx={{
        "&": {
          border: '1px solid #262626',
          borderRadius: '12px',
          color: '#fff'
        }
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{background: '#0f0f0f'}}>
          <TableRow>
            <TableCell align="left" sx={{color: '#fff', fontWeight: '600', borderRight: '1px solid #262626', borderBottom: '1px solid #262626', fontSize: '16px'}}>Features</TableCell>
            <TableCell align="left" sx={{color: '#fff', fontWeight: '600', borderRight: '1px solid #262626', borderBottom: '1px solid #262626', fontSize: '16px'}}>Basic</TableCell>
            <TableCell align="left" sx={{color: '#fff', fontWeight: '600', borderRight: '1px solid #262626', borderBottom: '1px solid #262626', fontSize: '16px'}}>Standard <span className={style.subscriptionTable__label}>Popular</span></TableCell>
            <TableCell align="left" sx={{color: '#fff', fontWeight: '600', borderBottom: '1px solid #262626', fontSize: '16px'}}>Premium</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ 
                '&:last-child td': { 
                  border: 0,
                  borderRight: '1px solid #262626'
                }, 
                '&:not(:last-child) td': { 
                  borderBottom: '1px solid #262626',
                  borderRight: '1px solid #262626'
                }, 
              }}
            >
              <TableCell component="th" scope="row" sx={{'&': {border: '1px solid #262626',borderLeft: '0', color: '#FFF', whiteSpace: 'nowrap'}}}>
                {row.name}
              </TableCell>
              <TableCell align="left" sx={{'&': {border: '1px solid #262626', color: '#FFF'}}}>{row.basic}</TableCell>
              <TableCell align="left" sx={{'&': {border: '1px solid #262626', color: '#FFF'}}}>{row.standard}</TableCell>
              <TableCell align="left" sx={{'&': {border: '1px solid #262626', borderRight: '0 !important', color: '#FFF'}}}>{row.premium}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </TableContainer>
  );
}

export default SubscriptionTable;