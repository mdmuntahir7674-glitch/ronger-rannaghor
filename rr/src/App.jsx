import { memo, useEffect } from 'react'
import markup from './markup.html?raw'

// The original site is plain JS driven by inline handlers (onclick="...") and
// globals, so its scripts are loaded unchanged as classic scripts from /legacy.
const SCRIPTS = ['/legacy/app.js', '/legacy/effects.js']

function loadSequentially(list) {
  if (window.__rrLoaded) return
  window.__rrLoaded = true
  list.forEach((src) => {
    const s = document.createElement('script')
    s.src = src
    s.async = false // keep execution order
    document.body.appendChild(s)
  })
}

// Static markup: React never re-renders it, so the legacy code can own #app.
const Shell = memo(() => <div dangerouslySetInnerHTML={{ __html: markup }} />, () => true)

export default function App() {
  useEffect(() => { loadSequentially(SCRIPTS) }, [])
  return <Shell />
}
