import { Grid, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const ProfileBox = () => {
  const { control } = useFormContext();
  return (
    <Grid item container direction="column" paddingBottom={5}>
      <Grid item>
        <TextField variant="standard" placeholder="이름 (필수)" error={false} helperText="" fullWidth />
      </Grid>
      <Grid item>
        <TextField variant="standard" placeholder="이메일 (필수)" error={false} helperText="" fullWidth />
      </Grid>
      <Grid item>
        <Controller
          control={control}
          name="profile.phone"
          rules={{
            required: true,
            validate: (value) => {
              const regex = /\d{3}-\d{3,4}-\d{4}/;
              if (!regex.test(value)) return '연락처를 입력해주세요.';
              return true;
            },
          }}
          render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
            <TextField variant="standard" placeholder="연락처(필수) ex) 010-0000-0000" error={false} fullWidth value={value} onChange={onChange} />
          )}
        />
        {/*정규식 : const regex = /\d{3}-\d{3,4}-\d{4}/; */}
      </Grid>
    </Grid>
  );
};

export default ProfileBox;
