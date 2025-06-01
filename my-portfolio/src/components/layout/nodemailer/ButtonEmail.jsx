import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export default function ButtonEmail() {
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
      Subscribe
    </Button>
  );
}
