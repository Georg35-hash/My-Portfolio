import Project from './Project';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
} from '../../shared/animations/motionVariants';
import { usePosts } from '../../context/NewsContextProvider';
import { projectsList, titles } from '../../context/translation';

export default function ProjectList() {
  const { language } = usePosts();

  const projects = projectsList[language] || projectsList.en;
  const titlesProject = titles[language]?.[0]?.project || titles.en[0].project;
  return (
    <Box
      sx={{ display: 'block', margin: '20px 0' }}
      component={motion.section}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Typography
          variant="h3"
          fontFamily="Roboto"
          sx={{ textAlign: 'center', marginBottom: { xs: 3, sm: 4, md: 5 } }}
        >
          {titlesProject}
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          gap: 4,
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {projects.map(project => (
          <motion.div key={project.id} variants={itemVariants}>
            <Project project={project} />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
