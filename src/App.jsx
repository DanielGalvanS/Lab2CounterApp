import { useState } from 'react'
import {HolaMundo} from './components/HolaMundo.jsx'
import {Variables} from './components/Variables.jsx'
import {ArchivoImportacion} from './components/ArchivoImportacion.jsx'
import './App.css'

function App() {

  return (
    <>
      <HolaMundo/>
      <Variables/>
      <ArchivoImportacion/>
    </>
  )
}

export default App
