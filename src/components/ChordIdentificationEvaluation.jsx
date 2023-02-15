import { Paper, TableContainer, Typography, Box, Table, TableHead, TableRow, TableCell, TableBody, Button, Fade } from "@mui/material";
import React from "react";

export default function ChordIdentificationEvaluation({ questions, setState }) {

    //To fix click through from last screens button.
    const [canClickOk, setCanClickOk] = React.useState(false);

    const setStateToMenu = () => {
        if(!canClickOk)
            return;
        setState('menu')
    }

    const getRowColor = (question) => {
        const wrongColor = '#FFDCDC';
        const rightColor = '#EAFFDF';
        if(!question.guess)
            return wrongColor;

        if(question.answer === question.guess){
            return rightColor;
        }else{
            return wrongColor;
        }
    }

    return (
        <Fade addEndListener={() => setCanClickOk(true)} in={true}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: 2,
                overflow: 'scroll',
                gap: 2,
                justifyContent: 'space-between'
            }}>
                <Typography variant="h4">Evaluering</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nr.</TableCell>
                                <TableCell align="right">Facit</TableCell>
                                <TableCell align="right">Dit svar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {questions.map((question, i) => (
                                <TableRow 
                                    key={i}
                                    style={{backgroundColor:getRowColor(question)}}
                                >
                                    <TableCell>{i + 1}</TableCell>
                                    <TableCell align="right">{question.answer}</TableCell>
                                    <TableCell align="right">{question.guess}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button
                    variant="contained"
                    fullWidth={true}
                    onClick={() => setStateToMenu()}
                >
                    Ok
                </Button>
            </Box>
        </Fade>
    );
}
