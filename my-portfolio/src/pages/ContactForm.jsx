import { Box, TextField, Typography, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import Notification from '../components/layout/Notifications';
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import {
  containerVariants,
  itemVariants,
} from '../shared/animations/motionVariants';
import ButtonEmail from '../components/layout/nodemailer/ButtonEmail';

export default function ContactForm() {
  const [notificationOpen, setNotificationOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    try {
      await emailjs.send(
        'service_rsi6x48',
        'template_y9b1o3r',
        {
          user_email: data.email,
          user_name: data.name,
          user_message: data.message,
        },
        'DHocbzH561cuvoxch',
      );
      setNotificationOpen(true);
      reset();
    } catch (err) {
      console.error('Email sending failed:', err);
      setError('email', {
        type: 'manual',
        message: 'Failed to send your message. Please try again later.',
      });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ width: '100%', maxWidth: 500 }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              fontFamily="Roboto"
            >
              Contact Me
            </Typography>
          </motion.div>

          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <motion.div variants={itemVariants}>
              <TextField
                fullWidth
                label="Name"
                {...register('name', { required: 'Name is required' })}
                margin="normal"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email format',
                  },
                })}
                margin="normal"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                {...register('message', { required: 'Message is required' })}
                margin="normal"
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ButtonEmail initialText="Send" clickedText="One Moment..." />
            </motion.div>
          </Box>
        </Paper>
      </motion.div>

      <Notification
        open={notificationOpen}
        message={'Message sent successfully!'}
        severity="success"
        onClose={() => setNotificationOpen(false)}
      />
    </Box>
  );
}
