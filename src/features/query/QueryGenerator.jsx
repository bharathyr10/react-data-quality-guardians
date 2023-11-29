import React, { useState } from "react";
import "./QueryGenerator.css";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import NavBar from "../navBar/NavBar";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function QueryGenerator() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const [value, setValue] = React.useState("sql");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="rule-generator">
        <Paper className="rule-generation-header">
          <Typography className="rule-header">Query Generator</Typography>
          <div className="generate-button">
            <Button
              id="generate"
              variant="contained"
              onClick={() => navigate("/rule")}
            >
              Data Quality Rule Generation
            </Button>
          </div>
        </Paper>
        <Paper className="rule-generation-search">
          <div className="query-search-box">
            <TextField
              id="search"
              type="search"
              label="Select verified table"
              value={searchTerm}
              onChange={handleChange}
              sx={{ width: "75%" }}
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
            />
          </div>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="sql" control={<Radio />} label="SQL" />
            <FormControlLabel
              value="oracle"
              control={<Radio />}
              label="Oracle"
            />
            <FormControlLabel value="hive" control={<Radio />} label="Hive" />
          </RadioGroup>
          <div className="generate-button">
            <Button id="generate" variant="contained">
              Generate
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}
