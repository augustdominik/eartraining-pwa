import { Paper, TableContainer, Typography, Box, Table, TableHead, TableRow, TableCell, TableBody, Button, Fade } from "@mui/material";

export default function ChordIdentificationEvaluation({ questions, setState }) {
    return (
        <Fade in={true}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: 2,
                overflow: 'scroll',
                gap: 2,
                justifyContent:'space-between'
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
                                <TableRow key={i}>
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
                    onClick={() => setState('menu')}
                >
                    Ok
                </Button>
            </Box>
        </Fade>
    );
}
