import { Grid, Typography, Stack, Container } from '@mui/material';
import IntroductionBox from 'container/introductionBox';
import CareerBox from 'container/careerBox';
import ProfileBox from 'container/profileBox';
import { resumeLayout } from 'style/resume';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TitleBox from 'container/titleBox';
import SkillBox from 'container/skillBox';
import FloatingBox from 'container/floatingBox';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { useEffect } from 'react';
import { defaultResumeData } from 'util/defaultData';

const Create = () => {
  const resumeForm = useForm({ defaultValues: defaultResumeData, mode: 'onChange' });
  const titleField = useWatch({ control: resumeForm.control, name: 'title' });
  const MAX_COUNT = 400;

  useEffect(() => {
    console.log(titleField);
  }, [titleField]);

  return (
    <Container>
      <Grid item container direction="column" gap={5} css={resumeLayout}>
        <Grid item>
          <Stack className="tip1" direction="row" gap={1}>
            <InfoOutlinedIcon fontSize="small" />
            <Typography>🔪퇴를 위한 React Hook Form</Typography>
          </Stack>
        </Grid>
        <FormProvider {...resumeForm}>
          <form>
            <TitleBox />
            <ProfileBox />
            <IntroductionBox />
            <CareerBox />
            <SkillBox />
          </form>
        </FormProvider>
      </Grid>
      <FloatingBox submitTrigger={() => null} count={(Math.min(0, MAX_COUNT) / MAX_COUNT) * 100} />
    </Container>
  );
};

export default Create;
