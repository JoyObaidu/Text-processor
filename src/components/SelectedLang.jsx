/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const SelectedLang = ({ selectedLanguage, setSelectedLanguage}) => {
  return (
    <div>
         <div className="mt-2 flex items-center space-x-2">
          <select className="p-2 bg-white border rounded" value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="pt">Portuguese</option>
            <option value="es">Spanish</option>
            <option value="ru">Russian</option>
            <option value="tr">Turkish</option>
            <option value="fr">French</option>
          </select>
        </div>
    </div>
  )
}

export default SelectedLang