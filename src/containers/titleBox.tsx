import { Grid, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const TitleBox = () => {
  const { control } = useFormContext();
  return (
    <Grid item paddingBottom={5}>
      <Controller
        control={control}
        name="title"
        render={({ field: { value, onChange } }) => (
          <TextField
            variant="standard"
            placeholder="이력서 제목(필수)"
            fullWidth
            inputProps={{
              style: {
                fontSize: 36,
              },
            }}
            value={value}
            onChange={onChange}
          />
        )}
      />
    </Grid>
  );
};

export default TitleBox;
