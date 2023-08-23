import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControlLabel, Grid, MenuItem, Modal, Radio, Select, Stack, Typography } from '../../../../../node_modules/@mui/material/index'
import { Field } from 'components/Incidences/Field/Field';
import { DatePicker, DateTimePicker, LocalizationProvider } from '../../../../../node_modules/@mui/lab/index';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const EditModal = ({ isOpen, values, scroll, handleClose }) => {
    return (
        <>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                fullWidth
                maxWidth="md"
            >
                <Typography variant='h4' p={3}>Editar incidencia: {values.codigo}</Typography>
                <DialogContent dividers={scroll === 'paper'}>


                    <Grid container>
                        <Grid xs={8}>
                            <Field label="Tipo de incidencia: " input='select' />
                            <Field label="Responsable: " input='select' />
                            <Field label="Informador: " />
                            <Field label="Versión(es) Afectadas: " input='select' />
                            <Field label="Resumen: " />
                            <Field label="Descripción: " input='textarea' />
                            <Field label="Comentario: " input='textarea' />
                            <Field label="Tipo de acción: " input='radio-group'>
                                <FormControlLabel sx={{ minWidth: 272 }} value="Accion Preventiva" control={<Radio />} label="Accion Preventiva" />
                                <FormControlLabel sx={{ minWidth: 272 }} value="Accion Correctiva" control={<Radio />} label="Accion Correctiva" />
                            </Field>
                            <Field label="Analisis de causa: " input='textarea' />
                            <Field label="Accion a tomar: " input='textarea' />
                            <Field label="Fecha limite accion a tomar: " input='date' />
                            <Field label="Verificacion de accion: " input='textarea' />
                            <Field label="Responsable verificacion accion: "  />
                            <Field label="Fecha verificacion accion: " input='date' />
                            <Field label="Verificacion efectividad de accion: " input='textarea' />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={handleClose}>Cerrar</Button>
                    <Button color='success' variant='contained' onClick={handleClose}>Enviar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
