import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

 export default function SelectForm(){
    const classes = useStyles();
    const [state, setState] = React.useState({
      days: '',
      name: 'hai',
    });
  
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };
    return(
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Last 10 days</InputLabel>
        <Select
          native
          value={state.days}
          onChange={handleChange}
          label="Last 10 days "
          inputProps={{
            name: 'days',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={20}>Last 20 days</option>
          <option value={30}>Last Month</option>
          <option value={365}>Last Year</option>
        </Select>
      </FormControl>

    )
 }
