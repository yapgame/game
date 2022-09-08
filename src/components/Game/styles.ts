export const styleBox = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  minHeight: 800,
};

export const styleCard = {
  width: '100%',
  maxWidth: 400,
  minHeight: 600,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
};

export const styleNavLink = {
  margin: '0',
  color: '#1976d2',
  textDecoration: 'none',
};

export const styleTextField = {
  m: 2,
  maxWidth: '40ch',
  width: '100%',
};

export const styleAvatar = {
  height: 100,
  width: 100,
};

export const styleFormDialogBox = {
  width: '60ch',
};

export const styleFormDialogButton = {
  m: 2,
  width: '100%',
};

export const styleChatBox = {
  display: 'flex',
  flexWrap: 'wrap',
  '& > :not(style)': {
    m: 1,
    width: 300,
    height: 300,
  },
};
export const styleChatPaper = {
  display: 'flex',
  flexWrap: 'wrap',
  '& > :not(style)': {
    m: 1,
    // margin: 0,
    // padding: 0,
  },
};

export const styleCanvas = {
  border: '1px solid #d3d3d3',
  borderRadius: '8px',
  marginTop: '10px',
  marginLeft: '10px',
};

export const styleBoxCanvas = {
  margin: '10px',
  border: '1px solid #d3d3d3',
  borderRadius: '8px',
};

export const styleMessage = {
  display: 'flex',
  flexWrap: 'wrap',
  '& > :not(style)': {
    m: 2,
    margin: 0,
    padding: 0,
  },
};

export const styleTableRow = {
  '&:last-child td, &:last-child th': { border: 0 },
  width: '100%',
};

export const styleButton = {
  m: 1,
  maxWidth: '280px',
  height: '4ch',
  width: '100%',
};
