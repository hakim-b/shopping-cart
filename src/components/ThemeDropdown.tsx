import { useEffect } from 'react'
import { themeChange } from 'theme-change'

export function ThemeDropdown() {
  const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
  ]

  useEffect(() => {
    themeChange(false)
  })

  return (
    <select className="select w-52 max-w-xs" data-choose-theme>
      {themes.map((value) => (
        <option key={value.toLowerCase()} value={value.toLowerCase()}>{value}</option>
      ))}
    </select>
  )
}
