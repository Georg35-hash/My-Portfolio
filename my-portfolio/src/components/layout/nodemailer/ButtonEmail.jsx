import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';

export default function ButtonEmail({ initialText }) {
  const [text, setText] = useState(initialText);

  return (
    <Button
      type="submit"
      variant="contained"
      startIcon={<EmailIcon />}
      sx={{
        width: '100%',
        backgroundColor: theme => theme.palette.customColor.main,
        '&:hover': {
          backgroundColor: theme => theme.palette.customColor.dark,
        },
      }}
    >
      {text}
    </Button>
  );
}
