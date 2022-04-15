// import { useEffect, useState } from "react";

// function getSavedValue(key,initialVal) {
// 	const val = JSON.parse(localStorage.getItem(key));
// 	if (val) return val;
// 	return initialVal;
// }
// export default function useLocalStorage(key, intialValue) {
// 	const [val, setVal] = useState(()=>getSavedValue(key, intialValue));
// 	useEffect(() => {
// 		localStorage.setItem(key, JSON.stringify(val));
// 	}, [key,val]);
// 	return [val, setVal];
// }

import { useState, useEffect } from "react"

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof defaultValue === "function") {
      return defaultValue()
    } else {
      return defaultValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
